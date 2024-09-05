//picruteres 600/400

import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import classes from "../styles/Carousel.module.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="flex relative justify-center w-full h-full">
      <BsArrowLeftCircleFill
        onClick={prevSlide}
        className={`${"absolute w-6 h-6 text-[#ffffff] hover:cursor-pointer hover:text-white"} ${"left-2 top-1/2"}`}
      />
      {data.map((item, id) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={id}
            className={
              slide === id ? "rounded-3xl" : `${"rounded-3xl"} ${"hidden"}`
            }
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className={`${"absolute w-6 h-6 text-[#ffffff] hover:cursor-pointer hover:text-white"} ${"right-2 top-1/2"}`}
      />
      <span className="flex absolute bottom-4">
        {data.map((_, id) => {
          return (
            <button
              key={id}
              className={
                slide === id
                  ? "bg-white h-4 w-4 rounded-full border-none outline-none mx-1 my-1 cursor-pointer"
                  : `${"bg-white h-4 w-4 rounded-full border-none outline-none mx-1 my-1 cursor-pointer"} ${"bg-[#808080]"}`
              }
              onClick={() => setSlide(id)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
