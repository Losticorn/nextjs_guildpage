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
import Link from "next/link";

export default function Recruitment() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Head>
        <title>GET YOUR DIRT ON!</title>
      </Head>
      <main className="flex flex-row justify-center items-center flex-wrap m-auto max-w-[1500px]">
        <h1 className="text-6xl py-4 text-white my-6">GET YOUR DIRT ON!</h1>
        <div className="flex justify-between flex-row flex-wrap m-4 w-full">
          <div className="flex flex-col items-left rounded-3xl bm-8 w-1/2 text-white">
            <menu className="rounded-t-xl text-white flex flex-row flex-wrap m-0 p-0 bg-black">
              <TabButton
                className={
                  activeTab === 0
                    ? "border-b-[1px] border-[#C21F26]  text-lg px-4 py-4"
                    : "text-lg px-4 py-2"
                }
                title="We offer:"
                onClick={() => setActiveTab(0)}
              />
              <TabButton
                className={
                  activeTab === 1
                    ? "border-b-[1px] border-[#C21F26]  text-lg px-4 py-4"
                    : "text-lg px-4 py-2"
                }
                onClick={() => setActiveTab(1)}
                title="Our expectations:"
              />

              <TabButton
                className={
                  activeTab === 2
                    ? "border-b-[1px] border-[#C21F26]  text-lg px-4 py-4"
                    : "text-lg px-4 py-2"
                }
                onClick={() => setActiveTab(2)}
                title="Rules:"
              />
            </menu>
            <div className="bg-[#101010] px-6">
              <motion.ul>
                {recruitment[activeTab].map((item) => (
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
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center flex-col mb-8 max-w-[700px w-1/2"
          >
            <h2 className="flex justify-center items-center mb-8 text-3xl text-white">
              Currently recruiting:
              <Tooltip
                className=""
                title="If you are an exceptional player, do not hesitate to contact officers!"
                position="top"
              >
                <IoIosInformationCircleOutline size={30} />
              </Tooltip>
            </h2>
            <div className="flex justify-center flex-row flex-wrap gap-2 mb-8">
              <Tooltip title="Holy paladin" position="top">
                <Image className="rounded-full w-[7rem] h-max" src={paladin} />
              </Tooltip>
              <Tooltip title="Unholy death knight" position="top">
                <Image className="rounded-full w-[7rem] h-max" src={unholy} />
              </Tooltip>
              <Tooltip title="Arms warrior" position="top">
                <Image className="rounded-full w-[7rem] h-max" src={arms} />
              </Tooltip>
            </div>
            <div className="">
              <Link href="/application">
                <JoinButton title="Apply here!" />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
