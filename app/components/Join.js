"use client";

import { motion } from "framer-motion";

export default function JoinButton({
  children,
  onClick,
  title,
  type = "button",
}) {
  return (
    <motion.button
      class="px-8 py-4 text-3xl border-2 rounded-3xl text-white"
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
