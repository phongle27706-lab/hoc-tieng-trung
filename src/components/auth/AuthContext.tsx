"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import {
  type AuthResult,
  type AuthUser,
  getCurrentUser,
  loginAsGuest,
  loginUser,
  logoutUser,
  registerUser,
  subscribeAuthChanges,
} from "@/lib/auth";

interface AuthContextValue {
  user: AuthUser | null;
  isLoaded: boolean;
  login: (identifier: string, password: string) => AuthResult;
  register: (username: string, email: string, password: string) => AuthResult;
  loginGuest: () => AuthUser;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setUser(getCurrentUser());
    setIsLoaded(true);

    const unsubscribe = subscribeAuthChanges(() => {
      setUser(getCurrentUser());
    });
    return unsubscribe;
  }, []);

  const login = useCallback((identifier: string, password: string) => {
    const res = loginUser(identifier, password);
    if (res.ok) setUser(res.user);
    return res;
  }, []);

  const register = useCallback(
    (username: string, email: string, password: string) => {
      const res = registerUser(username, email, password);
      if (res.ok) setUser(res.user);
      return res;
    },
    []
  );

  const loginGuest = useCallback(() => {
    const guest = loginAsGuest();
    setUser(guest);
    return guest;
  }, []);

  const logout = useCallback(() => {
    logoutUser();
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoaded,
        login,
        register,
        loginGuest,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
