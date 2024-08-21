import classes from "../styles/CurrentProgression.module.css";
import fyrakk from "/public/Fyrakk_the_Blazing.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CurrentProgression() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className={classes.current}
    >
      <h2>Currently progressing</h2>
      <div className={classes.boss}>
        <Image className={classes.bossImg} src={fyrakk} />
      </div>
      <div className={classes.progress}>
        <h1>13.0%</h1>
      </div>
    </motion.div>
  );
}

// get data from warcraftlogs API?
