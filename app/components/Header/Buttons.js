"use client";

import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";

export default function Button({ className, title, children, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "flex items-center",
        "px-8 py-2 border-[1px] border-white text-white",
        "rounded-3xl gap-2 text-lg bg-transparent",
        className
      )}
      whileHover={{
        scale: 1.1,
        cursor: "pointer",
        background: "white",
        color: "black",
      }}
    >
      {children}
      {title}
    </motion.button>
  );
}
