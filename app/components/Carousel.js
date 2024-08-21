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
    <div className={classes.carousel}>
      <BsArrowLeftCircleFill
        onClick={prevSlide}
        className={`${classes.arrow} ${classes.arrowleft}`}
      />
      {data.map((item, id) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={id}
            className={
              slide === id
                ? classes.slide
                : `${classes.slide} ${classes.slidehidden}`
            }
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className={`${classes.arrow} ${classes.arrowright}`}
      />
      <span className={classes.indicators}>
        {data.map((_, id) => {
          return (
            <button
              key={id}
              className={
                slide === id
                  ? classes.indicator
                  : `${classes.indicator} ${classes.indicatorinactive}`
              }
              onClick={() => setSlide(id)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
