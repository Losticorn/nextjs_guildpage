"use client";

import { motion } from "framer-motion";
import { FaCopy } from "react-icons/fa6";
import { useState } from "react";
import discordlogo from "/public/discordlogo.jpg";
import Image from "next/image";
import { characters } from "../data/CardData";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const CardListItem = (props) => {
  const [isCopied, setIsCopied] = useState(false);

  function copyDiscord() {
    navigator.clipboard.writeText(props.character.discord);
    setIsCopied(true);
  }

  setTimeout(() => {
    setIsCopied(false);
  }, 1500);

  return (
    <motion.li
      variants={item}
      whileHover={{ scale: 1.1 }}
      className="flex flex-col justify-center w-[12rem] m-4 mb-16 p-6 text-white bg-black rounded-3xl border-[1px]"
    >
      <img
        className="rounded-full"
        src={props.character.image}
        alt="picture are not loaded"
      />
      <h2 className="text-2xl mb-2">{props.character.name}</h2>
      <h3 className="text-md text-[#c7c7c7] mb-2">{props.character.role}</h3>
      <div>
        {!isCopied && (
          <motion.button
            whileHover={{ cursor: "pointer" }}
            className="flex flex-row justify-center items-center text-white bg-transparent w-full mt-2 gap-1"
            onClick={copyDiscord}
          >
            <Image
              src={discordlogo}
              className="w-6 rounded-full"
              alt="discord"
            />
            <p>{props.character.discord}</p>
            <FaCopy />
          </motion.button>
        )}
        {isCopied && (
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-lime-400 rounded-b-xl"
          >
            Copied!
          </motion.p>
        )}
      </div>
    </motion.li>
  );
};

export default function Card() {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-row flex-wrap items-center text-center m-0 p-0 gap-4"
    >
      {characters.map((character) => {
        return <CardListItem character={character} key={character.id} />;
      })}
    </motion.ul>
  );
}
