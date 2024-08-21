"use client";

import { motion } from "framer-motion";

export default function JoinButton({
  className,
  children,
  onClick,
  title,

  type = "button",
}) {
  return (
    <motion.button
      className={className}
      whileHover={{
        scale: 1.1,
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
