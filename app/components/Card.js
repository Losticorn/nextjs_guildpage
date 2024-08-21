"use client";

import classes from "../styles/Card.module.css";
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
      className={classes.card}
    >
      <img src={props.character.image} alt="picture are not loaded" />
      <h2>{props.character.name}</h2>
      <h3>{props.character.role}</h3>
      <div className={classes.contact}>
        {!isCopied && (
          <motion.button
            whileHover={{ cursor: "pointer" }}
            className={classes.copyBtn}
            onClick={copyDiscord}
          >
            <Image
              src={discordlogo}
              className={classes.discordlogo}
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
            className={classes.copy}
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
      className={classes.list}
    >
      {characters.map((character) => {
        return <CardListItem character={character} key={character.id} />;
      })}
    </motion.ul>
  );
}
