"use client";

import classes from "../styles/PlatformsList.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { Tooltip } from "react-tippy";
import { platforms } from "../data/PlatformsData";

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

const CardPlatformsListItem = ({ name, img, url }) => {
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.2 }}
      className={classes.cardplatforms}
    >
      <Tooltip title="Click to visit platform." position="top">
        <Link className="url" href={`${url}`} target="_blank">
          <img className="platforms-logo" src={img} alt="picture"></img>
          <h2>{name}</h2>
        </Link>
      </Tooltip>
    </motion.div>
  );
};

function CardPlatforms() {
  return (
    <motion.ul variants={container} initial="hidden" animate="show">
      {platforms.map((platform) => {
        return <CardPlatformsListItem {...platform} key={platform.id} />;
      })}
    </motion.ul>
  );
}

export default CardPlatforms;
