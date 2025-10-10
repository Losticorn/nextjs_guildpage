import Image from "next/image";
import React from "react";
import type { StaticImageData } from "next/image";
import Link from "next/link";

type BlogProps = {
  url: StaticImageData | string;
  title: string;
  date: string;
  description: string;
};

export const Blog = ({ url, title, date, description }: BlogProps) => {
  return (
    <div className="relative flex my-16 max-w-[1000px] hover:cursor-pointer">
      <div className="w-2/5">
        <Image src={url} alt="image" />
      </div>

      <div className="flex flex-col w-3/5 px-6">
        <h3 className="uppercase text-3xl text-primary">{title}</h3>
        <p className="text-sm text-secondary">{date}</p>
        <p className="mt-4 text-lg">{description}</p>
      </div>
      <Link
        href={`/news/${title}`}
        className="absolute flex items-center justify-center w-full h-full opacity-0 bg-black hover:bg-black hover:opacity-80 transition-opacity duration-300"
      >
        <p className="text-6xl text-white ">READ MORE...</p>
      </Link>
    </div>
  );
};
