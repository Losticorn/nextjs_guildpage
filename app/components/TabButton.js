import { motion } from "framer-motion";

export default function TabButton({ title, className, onClick }) {
  return (
    <motion.button
      whileHover={{ cursor: "pointer" }}
      className={className}
      onClick={onClick}
    >
      {title}
    </motion.button>
  );
}
