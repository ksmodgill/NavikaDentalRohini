"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type AnimatedSectionProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  delay?: number;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function AnimatedSection<T extends ElementType = "section">({
  as,
  children,
  className,
  delay = 0,
  ...props
}: AnimatedSectionProps<T>) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion.create(as ?? "section");

  return (
    <Component
      initial={false}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
