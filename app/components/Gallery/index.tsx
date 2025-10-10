import React from "react";
import { Image } from "antd";

const imageArray = [
  { id: 1, url: "/guild-banner.jpg" },
  { id: 2, url: "/guilds-of-wow-logo.jpg" },
  { id: 3, url: "/MMOlogo.jpg" },
  { id: 4, url: "/priest-discipline.jpg" },
  { id: 5, url: "/raideriologo.jpg" },
  { id: 6, url: "/tindral.png" },
  { id: 7, url: "/brood.png" },
  { id: 8, url: "/Ansurek_killpic_finished.png" },
  { id: 9, url: "/undermined.png" },
];

export const Gallery = () => {
  return (
    <div className="grid grid-rows-auto grid-cols-4 gap-6">
      {imageArray.map((image) => (
        <Image
          key={image.id}
          src={image.url}
          width={300}
          height={200}
          className="object-cover"
        />
      ))}
    </div>
  );
};
