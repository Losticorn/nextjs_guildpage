import { motion } from "framer-motion";
import { WelcomeBannerButton } from "./WelcomeBannerButton";

export const WelcomeBannerButtons = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      className="relative flex flex-col ml-52"
    >
      <motion.ul
        className="space-y-8 lg:w-[700px]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <WelcomeBannerButton
          welcomeButtonText="join community"
          link="https://discord.gg/dDcFRPWk"
        />
        <WelcomeBannerButton
          welcomeButtonText="apply to raid"
          link="/application"
        />
        <WelcomeBannerButton
          welcomeButtonText="reach out to officer"
          link="/contact"
        />
      </motion.ul>
    </motion.div>
  );
};

// mising resposivity
