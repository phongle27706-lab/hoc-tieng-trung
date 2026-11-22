"use client";

import React from "react";
import { motion, type HTMLMotionProps, type Variants } from "framer-motion";

export const EDITORIAL_EASE: [number, number, number, number] = [
  0.22, 1, 0.36, 1,
];

export const EDITORIAL_DURATION = 0.35;

export const TACTILE_SPRING = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25,
};

export interface FadeInUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  y?: number;
}

export function FadeInUp({
  children,
  className = "",
  delay = 0,
  duration = EDITORIAL_DURATION,
  y = 14,
  ...props
}: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration, delay, ease: EDITORIAL_EASE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  staggerDelay?: number;
  delayChildren?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.06,
  delayChildren = 0,
  ...props
}: StaggerContainerProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: "some" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface StaggerItemProps extends HTMLMotionProps<"div"> {
  y?: number;
}

export function StaggerItem({
  children,
  className = "",
  y = 12,
  ...props
}: StaggerItemProps) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: EDITORIAL_DURATION,
        ease: EDITORIAL_EASE,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export interface HoverLiftCardProps extends HTMLMotionProps<"div"> {
  lift?: number;
}

export function HoverLiftCard({
  children,
  className = "",
  lift = -2,
  ...props
}: HoverLiftCardProps) {
  return (
    <motion.div
      whileHover={{ y: lift }}
      whileTap={{ scale: 0.98 }}
      transition={TACTILE_SPRING}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function TactileButton({
  children,
  className = "",
  ...props
}: HTMLMotionProps<"button">) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={TACTILE_SPRING}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}
