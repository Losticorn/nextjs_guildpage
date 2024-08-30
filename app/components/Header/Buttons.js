"use client";

import { motion } from "framer-motion";
import classes from "../../styles/Buttons.module.css";

export default function Button({ title, children, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className={classes.custombutton}
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
