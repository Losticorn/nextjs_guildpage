"use client";

import CurrentProgression from "../components/CurrentProgression";
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
      <main className="flex flex-col justify-center items-center max-w-[1500px] mx-auto">
        <h1 className="text-6xl py-4 text-white my-6">Raiding is our forte!</h1>
        <div className="flex flex-row flex-wrap justify-between w-full m-4 mb-16">
          <div className="flex flex-col items-left rounded-3xl bm-8 w-1/2">
            <menu className="rounded-t-xl text-white flex flex-row flex-wrap m-0 p-0 bg-black">
              <TabButton
                className={
                  activeTab === 0
                    ? "border-b-[1px] border-[#C21F26]  text-lg px-4 py-4"
                    : "text-lg px-4 py-2"
                }
                title="Setup"
                onClick={() => setActiveTab(0)}
              />
              <TabButton
                className={
                  activeTab === 1
                    ? "border-b-[1px] border-[#C21F26]  text-lg px-4 py-4"
                    : "text-lg px-4 py-2"
                }
                onClick={() => setActiveTab(1)}
                title="Mentality"
              />

              <TabButton
                className={
                  activeTab === 2
                    ? "border-b-[1px] border-[#C21F26]  text-lg px-4 py-4"
                    : "text-lg px-4 py-2"
                }
                onClick={() => setActiveTab(2)}
                title="Goals"
              />
              <TabButton
                className={
                  activeTab === 3
                    ? "border-b-[1px] border-[#C21F26]  text-lg px-4 py-4"
                    : "text-lg px-4 py-2"
                }
                onClick={() => setActiveTab(3)}
                title="History"
              />
            </menu>
            <div className="bg-[#101010] px-6">
              <motion.ul>
                {raiding[activeTab].map((item) => (
                  <motion.li
                    className="mx-0 my-4 text-lg text-white"
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
