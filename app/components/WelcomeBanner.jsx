import { motion } from "framer-motion";

export const WelcomeBanner = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      className="relative flex flex-col ml-52"
    >
      <motion.ul
        className="text-white text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.li
          className="list-none tracking-wide text-7xl mb-6 text-primary"
          variants={item}
        >
          WELCOME!
        </motion.li>

        <motion.li className="list-none text-2xl my-6" variants={item}>
          Are you World Of Warcraft fan?
        </motion.li>

        <motion.li className="list-none text-2xl my-6" variants={item}>
          Want to play with people who share your interests?
        </motion.li>

        <motion.li className="list-none text-2xl my-6" variants={item}>
          Come join us, and get your dirt on!
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default WelcomeBanner;
