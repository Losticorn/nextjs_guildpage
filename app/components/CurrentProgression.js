import fyrakk from "/public/Fyrakk_the_Blazing.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CurrentProgression() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex flex-wrap flex-col justify-center items-center w-1/2 mb-16 text-white"
    >
      <h2 className="mx-0 mb-6 text-3xl">Currently progressing</h2>
      <Image className="block h-80 w-auto rounded-3xl" src={fyrakk} />
      <div>
        <h1 className="my-6 text-4xl">58.8%</h1>
      </div>
    </motion.div>
  );
}

// get data from warcraftlogs API?
