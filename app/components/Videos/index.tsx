import React from "react";
import { Media } from "./Media";

export const Videos = () => {
  return (
    <div className="grid grid-cols-1 max-w-[1000px] gap-y-8">
      <Media
        video
        frameUrl="https://www.youtube.com/embed/ieLkoMFD1J0?si=GrLRGiMXNv-etvG2"
        mediaTitle="Dirty Zuk & the Boys Shenanigans #6"
        mediaDesc="Check out what we did!"
      />
      <Media
        video
        frameUrl="https://www.youtube.com/embed/ieLkoMFD1J0?si=GrLRGiMXNv-etvG2"
        mediaTitle="Dirty Zuk & the Boys Shenanigans #6"
        mediaDesc="Check out what we did!"
      />
      <button className="bg-primary justify-self-center py-2 px-3 w-24 hover:bg-white hover:cursor-pointer hover:text-primary transition-colors duration-200">
        <a>All videos</a>
      </button>
    </div>
  );
};
