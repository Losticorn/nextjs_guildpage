"use client";

import { useState } from "react";
import JoinButton from "../components/Join";
import { motion } from "framer-motion";
import TabButton from "../components/TabButton";
import Image from "next/image";
import paladin from "/public/holypaladin.jpg";
import unholy from "/public/death-knight-unholy.jpg";
import arms from "/public/warrior-arms.jpg";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Tooltip } from "react-tippy";
import { recruitment } from "../data/RecruitmentData";
import Head from "next/head";
import classes from "../styles/Recruitment.module.css";
import Link from "next/link";

export default function Recruitment() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Head>
        <title>GET YOUR DIRT ON!</title>
      </Head>
      <main className={classes.main}>
        <h1>GET YOUR DIRT ON!</h1>
        <div className={classes.top}>
          <div className={classes.raidinfo}>
            <menu className={classes.tabmenu}>
              <TabButton
                className={activeTab === 0 ? classes.active : classes.tab}
                title="We offer:"
                onClick={() => setActiveTab(0)}
              />
              <TabButton
                className={activeTab === 1 ? classes.active : classes.tab}
                onClick={() => setActiveTab(1)}
                title="Our expectations:"
              />

              <TabButton
                className={activeTab === 2 ? classes.active : classes.tab}
                onClick={() => setActiveTab(2)}
                title="Rules:"
              />
            </menu>
            <div className={classes.tabcontent}>
              <motion.ul className={classes.tablist}>
                {recruitment[activeTab].map((item) => (
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
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className={classes.currentclasses}
          >
            <h2>
              Currently recruiting:
              <Tooltip
                className={classes.tooltip}
                title="If you are exceptional player, do not hesitate to contact officers!"
                position="top"
              >
                <IoIosInformationCircleOutline size={30} />
              </Tooltip>
            </h2>
            <div className={classes.classes}>
              <Image src={paladin} />
              <Image src={unholy} />
              <Image src={arms} />
            </div>
            <div className={classes.joinbutton}>
              <Link href="/application">
                <JoinButton className={classes.joinbtn} title="Apply here!" />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
