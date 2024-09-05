"use client";

import { Carousel } from "../components/Carousel";
import { slides } from "../data/CarouselData";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main
      className="flex flex-col justify-center items-center max-w-[1500] mx-auto
    "
    >
      <h1 className="text-6xl py-4 text-white my-6 ">We are gamers.</h1>
      <div className="flex flex-row justify-center flex-wrap m-4 w-full gap-4">
        <div className="bg-[#101010] p-5 text-lg rounded-3xl text-white max-w-3xl leading-10">
          <p>
            Our guild was founded at the beginning of Shadowlands by our guild
            master, Zuknar. Since then, we've experienced a lot, both highs and
            lows, but each challenge has propelled our guild forward.
          </p>
          <p>
            We went from the guild, which was struggling clearing heroic to the
            guild that is consistently getting to the end game mythic bosses.
          </p>
          <p>
            All of this was possible thanks to an amazing group of people that
            were gathered here throughout the years, and hard work of our
            diligent officers.
          </p>
          <p>
            As of right now, we are very active guild with a dependable roster,
            that is aiming to achieve it's first <i>Cutting Edge</i>, and keep
            growing as time goes on.
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
          className="flex justify-center rounded-3xl max-w-3xl"
        >
          <Carousel data={slides} />
        </motion.div>
      </div>
    </main>
  );
}
