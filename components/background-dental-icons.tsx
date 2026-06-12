"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Cross, HeartPulse, ShieldCheck, Smile, SmilePlus, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

type BackgroundDentalIconsProps = {
  variant:
    | "hero"
    | "why"
    | "services"
    | "doctor"
    | "process"
    | "cases"
    | "testimonials"
    | "facilities"
    | "faq"
    | "contact";
};

type AnimationPreset = "float" | "floatReverse" | "breathe" | "floatRotate";

type DecorativeMotionProps = {
  children: ReactNode;
  className: string;
  duration: number;
  preset: AnimationPreset;
};

const decorativeStroke = {
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5
} as const;

function getAnimation(preset: AnimationPreset) {
  if (preset === "breathe") {
    return { scale: [1, 1.03, 1] };
  }

  if (preset === "floatRotate") {
    return { y: [-6, 6, -6], rotate: [-2, 2, -2] };
  }

  if (preset === "floatReverse") {
    return { y: [6, -6, 6] };
  }

  return { y: [-6, 6, -6] };
}

function DecorativeMotion({
  children,
  className,
  duration,
  preset
}: DecorativeMotionProps) {
  const shouldReduceMotion = useReducedMotion();
  const isFloating = preset === "float" || preset === "floatReverse";

  return (
    <motion.div
      className={className}
      animate={shouldReduceMotion ? undefined : getAnimation(preset)}
      transition={
        shouldReduceMotion
          ? undefined
          : {
              duration,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: isFloating ? "mirror" : "loop"
            }
      }
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}

export function BackgroundDentalIcons({ variant }: BackgroundDentalIconsProps) {
  if (variant === "hero") {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        <DecorativeMotion
          className="absolute right-4 top-24 size-14 text-primary opacity-[0.11] sm:right-12 sm:top-16 sm:size-20 sm:opacity-[0.1] lg:size-28"
          duration={14}
          preset="breathe"
        >
          <Sparkles className="size-full" {...decorativeStroke} />
        </DecorativeMotion>
      </div>
    );
  }

  if (variant === "why") {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        <DecorativeMotion
          className="absolute -left-4 bottom-10 size-16 text-primary opacity-[0.11] sm:left-6 sm:top-1/2 sm:size-24 sm:opacity-[0.1] lg:size-32"
          duration={18}
          preset="breathe"
        >
          <HeartPulse className="size-full" {...decorativeStroke} />
        </DecorativeMotion>
      </div>
    );
  }

  if (variant === "services") {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        <DecorativeMotion
          className="absolute right-3 top-12 size-16 text-primary opacity-[0.12] sm:right-8 sm:top-10 sm:size-24 sm:opacity-[0.1] lg:size-32"
          duration={22}
          preset="float"
        >
          <SmilePlus className="size-full" {...decorativeStroke} />
        </DecorativeMotion>
      </div>
    );
  }

  if (variant === "doctor") {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        <DecorativeMotion
          className="absolute left-4 top-24 size-14 text-primary opacity-[0.1] sm:left-10 sm:top-20 sm:size-24 sm:opacity-[0.1] lg:size-28"
          duration={14}
          preset="breathe"
        >
          <Sparkles className="size-full" {...decorativeStroke} />
        </DecorativeMotion>
      </div>
    );
  }

  if (variant === "process") {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        <DecorativeMotion
          className="absolute -left-3 top-16 size-16 text-primary opacity-[0.14] sm:left-8 sm:size-24 sm:opacity-[0.11] lg:size-32"
          duration={28}
          preset="floatRotate"
        >
          <ShieldCheck className="size-full" {...decorativeStroke} />
        </DecorativeMotion>
      </div>
    );
  }

  if (variant === "cases") {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        <DecorativeMotion
          className="absolute right-4 top-12 size-16 text-primary opacity-[0.11] sm:right-10 sm:size-24 sm:opacity-[0.1] lg:size-32"
          duration={24}
          preset="floatReverse"
        >
          <Smile className="size-full" {...decorativeStroke} />
        </DecorativeMotion>
      </div>
    );
  }

  if (variant === "testimonials") {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        <DecorativeMotion
          className="absolute right-4 top-1/3 size-16 text-primary opacity-[0.1] sm:right-8 sm:size-24 sm:opacity-[0.1] lg:size-32"
          duration={18}
          preset="breathe"
        >
          <HeartPulse className="size-full" {...decorativeStroke} />
        </DecorativeMotion>
      </div>
    );
  }

  if (variant === "facilities") {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        <DecorativeMotion
          className="absolute -left-4 top-16 size-16 text-primary opacity-[0.1] sm:left-8 sm:size-24 sm:opacity-[0.1] lg:size-32"
          duration={28}
          preset="floatRotate"
        >
          <ShieldCheck className="size-full" {...decorativeStroke} />
        </DecorativeMotion>
      </div>
    );
  }

  if (variant === "faq") {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        <DecorativeMotion
          className="absolute right-4 top-12 size-16 text-primary opacity-[0.11] sm:right-10 sm:size-24 sm:opacity-[0.1] lg:size-32"
          duration={20}
          preset="float"
        >
          <SmilePlus className="size-full" {...decorativeStroke} />
        </DecorativeMotion>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
      <DecorativeMotion
        className="absolute right-6 top-10 size-16 text-primary opacity-[0.14] sm:left-8 sm:right-auto sm:size-24 sm:opacity-[0.1] lg:size-32"
        duration={16}
        preset="breathe"
      >
        <Cross className="size-full" {...decorativeStroke} />
      </DecorativeMotion>
    </div>
  );
}
