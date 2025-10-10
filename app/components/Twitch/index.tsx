import React from "react";
import { Media } from "../Videos/Media";

export const Twitch = () => {
  return (
    <div className="grid grid-cols-1 max-w-[1000px] gap-y-8">
      <Media
        mediaTitle="Bobsfsx"
        mediaDesc="Description"
        frameUrl="https://player.twitch.tv/?channel=bobsgfx&parent=localhost"
        video
      />
      <Media
        mediaTitle="Dan"
        mediaDesc="Description"
        frameUrl="https://player.twitch.tv/?channel=left4deadagain&parent=localhost"
        video
      />
      <Media
        mediaTitle="Universalunicorn"
        mediaDesc="Description"
        frameUrl="https://player.twitch.tv/?channel=universalunicorn&parent=localhost"
        video
      />
    </div>
  );
};
