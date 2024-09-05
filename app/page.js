"use client";

import Image from "next/image";
import Link from "next/link";
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
    <main className="flex flex-wrap-reverse items-center justify-center max-w-[1500px] mt-28 mb-12 ms-auto me-auto gap-20">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col text-white text-left rounded-3xl bg-[#101010] p-10"
      >
        <h1 className="font-bold text-7xl mb-8 text-[#C21F26]">
          Dirty Zuk & The Boyz
        </h1>
        <motion.ul variants={container} initial="hidden" animate="show">
          <motion.li className="list-none text-2xl my-6" variants={item}>
            Are you a World of Warcraft fan?
          </motion.li>

          <motion.li className="list-none text-2xl my-6" variants={item}>
            Want to play with people who share your interests?
          </motion.li>

          <motion.li className="list-none text-2xl my-6" variants={item}>
            Come join us, and get your dirt on!
          </motion.li>

          <motion.li className="list-none text-2xl my-14" variants={item}>
            <Link href="recruitment">
              <JoinButton
                className="flex text-white mx-4 px-4 py-8  bg-transparent border-2 border-solid border-white rounded-3xl text-2xl"
                title="Join Us!"
              />
            </Link>
          </motion.li>
        </motion.ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex justify-center"
      >
        <Image
          className="rounded-3xl block width-full"
          src={guildbanner2}
          alt="guild-banner"
        />
      </motion.div>
    </main>
  );
}
