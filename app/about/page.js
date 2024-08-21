"use client";

import classes from "../styles/About.module.css";
import { Carousel } from "../components/Carousel";
import { slides } from "../data/CarouselData";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <main className={classes.main}>
        <h1>We are gamers.</h1>
        <div className={classes.container}>
          <div className={classes.text}>
            <p>
              Our guild was founded at the beginning of Shadowlands by our guild
              master, Zuknar. Since then, we've experienced a lot, both highs
              and lows, but each challenge has propelled our guild forward.
            </p>
            <p>
              We went from the guild, which was struggling clearing heroic to
              the guild that is consistently getting to the end game mythic
              bosses.
            </p>
            <p>
              All of this was possible thanks to an amazing group of people that
              were gathered here throughout the years, and hard work of our
              diligent officers.
            </p>
            <p>
              As of right now, we are very active guild with a dependable
              roster, that is aiming to achieve it's first <i>Cutting Edge</i>,
              and keep growing as time goes on.
            </p>
            <p>
              All of this is result of good relationships which goes beyond the
              game itself.
            </p>
            <p>Cheers!</p>
            <p>Dirty Zuk & The Boyz</p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className={classes.media}
          >
            <Carousel data={slides} />
          </motion.div>
        </div>
      </main>
    </>
  );
}
