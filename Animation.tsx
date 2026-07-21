"use client";
import { useLocale, useLocaleDirection } from "gt-react";

const blur = "blur(20px)";
const distance = 60;
const duration = 0.3;

export const useAnimations = () => {
  const localDir = useLocaleDirection();
  const local = useLocale();

  const isRTL = local === "ar-EN";

  return {
    ViewPort: {
      viewport: { once: true, amount: 0.5 },
      whileInView: {
        y: 0,
        x: 0,
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration },
      },
    },

    Animate: {
      animate: {
        y: 0,
        x: 0,
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration },
      },
      animateonly: { y: 0, x: 0, scale: 1, opacity: 1, filter: "blur(0px)" },
      transition: { duration },
    },

    FadeUp: {
      initial: { y: distance, opacity: 0, filter: blur },
      exit: { y: distance, opacity: 0, filter: blur },
    },

    FadeDown: {
      initial: { y: -distance, opacity: 0, filter: blur },
      exit: { y: -distance, opacity: 0, filter: blur },
    },

    FadeRight: {
      initial: { x: distance, opacity: 0, filter: blur },
      exit: { x: distance, opacity: 0, filter: blur },
    },

    FadeLeft: {
      initial: { x: -distance, opacity: 0, filter: blur },
      exit: { x: -distance, opacity: 0, filter: blur },
    },

    FadeStart: {
      initial: { x: isRTL ? distance : -distance, opacity: 0, filter: blur },
      exit: { x: isRTL ? distance : -distance, opacity: 0, filter: blur },
    },

    FadeEnd: {
      initial: { x: isRTL ? -distance : distance, opacity: 0, filter: blur },
      exit: { x: isRTL ? -distance : distance, opacity: 0, filter: blur },
    },

    Rotate_Scale_Tap: {
      whileTap: {
        rotateZ: isRTL ? 6 : -6,
        scale: 0.94,
        transition: { duration: 0.04 },
      },
    },
    Scale: {
      initial: { scale: 0.8, filter: blur },
      exit: { scale: 0.8, filter: blur },
    },

    opacity: {
      initial: { opacity: 0, filter: blur },
      exit: { opacity: 0, filter: blur },
    },

    opacityWithBlur: {
      initial: { filter: blur, opacity: 0 },
      whileInView: { filter: "blur(0px)", opacity: 1 },
    },

    BlurAnimate: {
      initial: {
        filter: blur,
        scale: 0.8,
      },
      whileInView: { filter: "blur(0px)", scale: 1 },
      viewport: { once: true, amount: 0.5 },
    },

    isDisabled: false,

    isRTL,
    direction: localDir,
  };
};

export const ViewPort = {
  viewport: { once: true, amount: 0.5 },
  whileInView: {
    y: 0,
    x: 0,
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration },
  },
};

export const Animate = {
  animate: {
    y: 0,
    x: 0,
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration },
  },
  animateonly: { y: 0, x: 0, scale: 1, opacity: 1, filter: "blur(0px)" },
  transition: { duration },
};

export const FadeUp = {
  initial: { y: distance, opacity: 0, filter: blur },
  exit: { y: distance, opacity: 0, filter: blur },
};

export const FadeDown = {
  initial: { y: -distance, opacity: 0, filter: blur },
  exit: { y: -distance, opacity: 0, filter: blur },
};

export const FadeRight = {
  initial: { x: distance, opacity: 0, filter: blur },
  exit: { x: distance, opacity: 0, filter: blur },
};

export const FadeLeft = {
  initial: { x: -distance, opacity: 0, filter: blur },
  exit: { x: -distance, opacity: 0, filter: blur },
};

export const Rotate_Scale_Tap = {
  whileTap: { rotateZ: -6, scale: 0.94, transition: { duration: 0.04 } },
};

export const opacity = {
  initial: { opacity: 0, filter: blur },
  exit: { opacity: 0, filter: blur },
};

export const opacityWithBlur = {
  initial: { filter: blur, opacity: 0 },
  whileInView: { filter: "blur(0px)", opacity: 1 },
};

export const BlurAnimate = {
  initial: { filter: blur, scale: 0.8 },
  whileInView: { filter: "blur(0px)", scale: 1 },
  viewport: { once: true, amount: 0.5 },
};
