import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

type WelcomeBannerButtonProps = {
  welcomeButtonText: string;
  className?: string;
  link: string;
};

export const WelcomeBannerButton = ({
  welcomeButtonText,
  className,
  link,
}: WelcomeBannerButtonProps) => {
  const item = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0 },
  };
  return (
    <motion.li
      className={cn(
        "bg-primary py-4 px-6 text-2xl hover:bg-white hover:text-primary cursor-pointer uppercase transition-colors duration-200",
        className
      )}
      variants={item}
    >
      <a target="_blank" href={link}>
        {welcomeButtonText}
      </a>
    </motion.li>
  );
};
