// Centralized Framer Motion animation variants and transitions
// Used across all portfolio sections for consistent, premium animations

// ─── Easing Curves ──────────────────────────────────────────────────────────
export const easing = [0.22, 1, 0.36, 1]          // smooth deceleration
export const easingIn = [0.36, 0, 0.78, 0]         // smooth acceleration
export const easingInOut = [0.45, 0, 0.55, 1]      // balanced

// ─── Fade Variants ──────────────────────────────────────────────────────────
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easing } },
}

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easing } },
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easing } },
}

export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easing } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

// ─── Scale Variants ─────────────────────────────────────────────────────────
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easing } },
}

export const scaleInBounce = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
}

// ─── Stagger Containers ──────────────────────────────────────────────────────
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

export const staggerFast = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
}

export const staggerSlow = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

// ─── Slide Variants ─────────────────────────────────────────────────────────
export const slideInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easing } },
}

// ─── Card Hover ─────────────────────────────────────────────────────────────
export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: { y: -6, scale: 1.01, transition: { duration: 0.3, ease: easing } },
}

// ─── Reusable Transitions ───────────────────────────────────────────────────
export const springTransition = { type: "spring", stiffness: 380, damping: 30 }
export const smoothTransition = { duration: 0.3, ease: "easeOut" }
export const slowTransition = { duration: 0.9, ease: easing }

// ─── Viewport Defaults ──────────────────────────────────────────────────────
export const viewport = { once: true }
export const viewportEager = { once: true, margin: "-10% 0px" }
