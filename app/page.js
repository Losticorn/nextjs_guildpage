"use client";

import Image from "next/image";
import Link from "next/link";
import classes from "./styles/Home.module.css";
import guildbanner2 from "../public/guild-banner.jpg";
import JoinButton from "./components/Join";
import { motion } from "framer-motion";

export default function Home() {
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
    <main className={classes.home}>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className={classes.left}
      >
        <h1>Dirty Zuk & The Boyz</h1>
        <motion.ul variants={container} initial="hidden" animate="show">
          <motion.li variants={item}>
            Are you a World of Warcraft fan?
          </motion.li>

          <motion.li variants={item}>
            Are you up to playing with like-minded people?
          </motion.li>

          <motion.li variants={item}>
            Come join us, and get your dirt on!
          </motion.li>
          <motion.li variants={item}>
            <Link href="recruitment">
              <JoinButton className={classes.btn} title="Join Us!" />
            </Link>
          </motion.li>
        </motion.ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        className={classes.right}
      >
        <Image src={guildbanner2} alt="guild-banner" />
      </motion.div>
    </main>
  );
}
