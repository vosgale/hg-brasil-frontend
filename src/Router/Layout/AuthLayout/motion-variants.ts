import type { Variants } from "framer-motion";

export const fadeInOutVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const fadeInWithSlideariants: Variants = {
  initial: { opacity: 0, filter: "blur(10px)", x: "-100%" },
  animate: { opacity: 1, filter: "blur(0px)", x: "0%" },
};

export const containerVariants = {
  initial: { translateY: "-100px", opacity: 0, filter: "blur(10px)", height: "0px" },
  animate: { translateY: 0, opacity: 1, filter: "blur(0)", height: "auto" },
};
