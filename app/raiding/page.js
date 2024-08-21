"use client";

import CurrentProgression from "../components/CurrentProgression";
import classes from "../styles/Raiding.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import TabButton from "../components/TabButton";
import { raiding } from "../data/RaidingData";
import Head from "next/head";

export default function Raiding() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <Head>
        <title>Raiding</title>
      </Head>
      <main className={classes.raiding}>
        <h1>Raiding is our forte!</h1>
        <div className={classes.left}>
          <div className={classes.raidinfo}>
            <menu className={classes.tabmenu}>
              <TabButton
                className={activeTab === 0 ? classes.active : classes.tab}
                title="Setup"
                onClick={() => setActiveTab(0)}
              />
              <TabButton
                className={activeTab === 1 ? classes.active : classes.tab}
                onClick={() => setActiveTab(1)}
                title="Mentality"
              />

              <TabButton
                className={activeTab === 2 ? classes.active : classes.tab}
                onClick={() => setActiveTab(2)}
                title="Goals"
              />
              <TabButton
                className={activeTab === 3 ? classes.active : classes.tab}
                onClick={() => setActiveTab(3)}
                title="History"
              />
            </menu>
            <div className={classes.tabcontent}>
              <motion.ul className={classes.tablist}>
                {raiding[activeTab].map((item) => (
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    open
                    key={item}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
          <CurrentProgression />
        </div>
      </main>
    </>
  );
}
