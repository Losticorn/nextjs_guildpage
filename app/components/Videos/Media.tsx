//continue working on this
//you just need to past props properly and use this compoennt

import Image from "next/image";
import React, { useEffect, useState } from "react";

type MediaProps = {
  video?: boolean;
  frameUrl: string;
  mediaTitle: string;
  mediaDesc: string;
  data?: [];
  props: any;
  dataId: string;
  dataUrl: string;
};

export const Media = ({
  video,
  frameUrl,
  mediaTitle,
  mediaDesc,
  data,
}: MediaProps) => {
  const [prop, setProp] = useState(
    <div className="grid grid-rows-auto grid-cols-4 gap-6">
      {data.map((data) => (
        <Image
          key={data}
          src={data}
          width={300}
          height={200}
          className="object-cover"
          alt="image alt"
        />
      ))}
    </div>
  );

  useEffect(() => {
    if (video) {
      setProp(
        <iframe
          width="560"
          height="320"
          src={frameUrl}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      );
    }
  }, [video]);

  return (
    <div className="flex lg:gap-x-8">
      {prop}
      <div className="space-y-4">
        <h2 className="text-2xl">{mediaTitle}</h2>
        <p className="text-base">{mediaDesc}</p>
      </div>
    </div>
  );
};

// video or image
