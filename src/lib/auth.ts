export interface AuthUser {
  id: string;
  username: string;
  email: string;
  isGuest: boolean;
  createdAt: string;
}

interface StoredAccount extends AuthUser {
  passwordHash: string;
}

export type AuthResult =
  | { ok: true; user: AuthUser }
  | { ok: false; error: string };

export const AUTH_CHANGE_EVENT = "hanzi-auth-change";
const STORAGE_UPDATE_EVENT_NAME = "hanzi-storage-update";

const ACCOUNTS_KEY = "hanzi_auth_accounts";
const CURRENT_USER_KEY = "hanzi_auth_current_user";

const isBrowser = (): boolean => typeof window !== "undefined";

const MIN_USERNAME_LENGTH = 2;
const MAX_USERNAME_LENGTH = 40;
const MAX_EMAIL_LENGTH = 120;
const MIN_PASSWORD_LENGTH = 4;
const MAX_PASSWORD_LENGTH = 128;
const UNSAFE_HTML_CHARS_REGEX = /[<>"']/;
const AUTH_PEPPER = "hanzi_local_auth_v2_pepper";

function generateSalt(): string {
  if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
    const bytes = new Uint8Array(12);
    crypto.getRandomValues(bytes);
    return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
  }
  return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 12)}`;
}

function hashPasswordLegacy(password: string): string {
  let hash = 5381;
  const salted = `hanzi_v1::${password}`;
  for (let i = 0; i < salted.length; i++) {
    hash = (hash * 33) ^ salted.charCodeAt(i);
  }
  return `h_${(hash >>> 0).toString(16)}`;
}

function computeSaltedHash(password: string, salt: string): string {
  let h1 = 0x811c9dc5;
  let h2 = 5381;
  const input = `${AUTH_PEPPER}::${salt}::${password}::${salt.split("").reverse().join("")}`;
  for (let round = 0; round < 64; round++) {
    for (let i = 0; i < input.length; i++) {
      const ch = input.charCodeAt(i) ^ (round * 31);
      h1 = Math.imul(h1 ^ ch, 0x01000193);
      h2 = (Math.imul(h2, 33) ^ ch) >>> 0;
    }
  }
  return `v2$${salt}$${(h1 >>> 0).toString(16).padStart(8, "0")}${(h2 >>> 0).toString(16).padStart(8, "0")}`;
}

function hashPassword(password: string): string {
  const salt = generateSalt();
  return computeSaltedHash(password, salt);
}

function verifyPassword(password: string, storedHash: string): boolean {
  if (storedHash.startsWith("v2$")) {
    const parts = storedHash.split("$");
    if (parts.length !== 4 || !parts[1]) return false;
    return computeSaltedHash(password, parts[1]) === storedHash;
  }
  return hashPasswordLegacy(password) === storedHash;
}

function sanitizeUsername(raw: string): string {
  return raw.replace(/[<>"']/g, "").trim();
}

function readAccounts(): StoredAccount[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(ACCOUNTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as StoredAccount[]) : [];
  } catch {
    return [];
  }
}

function writeAccounts(accounts: StoredAccount[]): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
  } catch {
    // Ignore storage quota errors
  }
}

function notifyAuthChange(): void {
  if (!isBrowser()) return;
  window.dispatchEvent(new CustomEvent(AUTH_CHANGE_EVENT));
  window.dispatchEvent(
    new CustomEvent(STORAGE_UPDATE_EVENT_NAME, {
      detail: { key: CURRENT_USER_KEY },
    })
  );
}

function setCurrentUserSession(user: AuthUser | null): void {
  if (!isBrowser()) return;
  try {
    if (user) {
      window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    } else {
      window.localStorage.removeItem(CURRENT_USER_KEY);
    }
  } catch {
    // Ignore storage errors
  }
  notifyAuthChange();
}

export function getCurrentUser(): AuthUser | null {
  if (!isBrowser()) return null;
  try {
    const raw = window.localStorage.getItem(CURRENT_USER_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as AuthUser;
    if (!parsed || typeof parsed.id !== "string") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function getActiveUserId(): string {
  const user = getCurrentUser();
  return user?.id || "guest";
}

export function registerUser(
  username: string,
  email: string,
  password: string
): AuthResult {
  const trimmedUsername = username.trim();
  if (UNSAFE_HTML_CHARS_REGEX.test(trimmedUsername)) {
    return {
      ok: false,
      error: "Tên người dùng không được chứa ký tự đặc biệt (< > \" ').",
    };
  }
  const cleanUsername = sanitizeUsername(trimmedUsername);
  const cleanEmail = email.trim().toLowerCase();

  if (
    cleanUsername.length < MIN_USERNAME_LENGTH ||
    cleanUsername.length > MAX_USERNAME_LENGTH
  ) {
    return {
      ok: false,
      error: `Tên người dùng phải từ ${MIN_USERNAME_LENGTH} đến ${MAX_USERNAME_LENGTH} ký tự.`,
    };
  }
  if (
    !cleanEmail ||
    cleanEmail.length > MAX_EMAIL_LENGTH ||
    !/^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/.test(cleanEmail)
  ) {
    return {
      ok: false,
      error: `Địa chỉ email không hợp lệ (tối đa ${MAX_EMAIL_LENGTH} ký tự).`,
    };
  }
  if (
    password.length < MIN_PASSWORD_LENGTH ||
    password.length > MAX_PASSWORD_LENGTH
  ) {
    return {
      ok: false,
      error: `Mật khẩu phải từ ${MIN_PASSWORD_LENGTH} đến ${MAX_PASSWORD_LENGTH} ký tự.`,
    };
  }

  const accounts = readAccounts();
  const duplicateEmail = accounts.some(
    (acc) => acc.email.toLowerCase() === cleanEmail
  );
  if (duplicateEmail) {
    return { ok: false, error: "Email này đã được đăng ký." };
  }

  const duplicateUsername = accounts.some(
    (acc) => acc.username.toLowerCase() === cleanUsername.toLowerCase()
  );
  if (duplicateUsername) {
    return { ok: false, error: "Tên người dùng này đã tồn tại." };
  }

  const newUser: AuthUser = {
    id: `u_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    username: cleanUsername,
    email: cleanEmail,
    isGuest: false,
    createdAt: new Date().toISOString(),
  };

  const stored: StoredAccount = {
    ...newUser,
    passwordHash: hashPassword(password),
  };

  writeAccounts([...accounts, stored]);
  setCurrentUserSession(newUser);

  return { ok: true, user: newUser };
}

export function loginUser(identifier: string, password: string): AuthResult {
  const cleanId = identifier.trim().toLowerCase();
  if (!cleanId || !password) {
    return { ok: false, error: "Vui lòng nhập đầy đủ thông tin đăng nhập." };
  }

  const accounts = readAccounts();
  const match = accounts.find(
    (acc) =>
      acc.email.toLowerCase() === cleanId ||
      acc.username.toLowerCase() === cleanId
  );

  if (!match || !verifyPassword(password, match.passwordHash)) {
    return {
      ok: false,
      error: "Email/tên người dùng hoặc mật khẩu không chính xác.",
    };
  }

  const user: AuthUser = {
    id: match.id,
    username: match.username,
    email: match.email,
    isGuest: false,
    createdAt: match.createdAt,
  };

  setCurrentUserSession(user);
  return { ok: true, user };
}

export function loginAsGuest(): AuthUser {
  const guestUser: AuthUser = {
    id: "guest",
    username: "Khách",
    email: "",
    isGuest: true,
    createdAt: new Date().toISOString(),
  };
  setCurrentUserSession(guestUser);
  return guestUser;
}

export function logoutUser(): void {
  setCurrentUserSession(null);
}

export function subscribeAuthChanges(callback: () => void): () => void {
  if (!isBrowser()) return () => {};
  const handler = () => callback();
  window.addEventListener(AUTH_CHANGE_EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(AUTH_CHANGE_EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}
