"use client";

import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export default function JoinButton({
  className,
  children,
  onClick,
  title,
  type = "button",
}) {
  return (
    <motion.button
      class={cn("px-8 py-4 text-3xl text-white", className)}
      whileHover={{
        scale: 1.05,
        cursor: "pointer",
        background: "white",
        color: "black",
      }}
      onClick={onClick}
      type={type}
    >
      {title}
      {children}
    </motion.button>
  );
}
