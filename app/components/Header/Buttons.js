"use client";

import { motion } from "framer-motion";

export default function Button({ title, children, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className="flex items-center text-white px-8 py-2 border-[1px] border-white rounded-3xl gap-2 text-lg bg-transparent"
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
