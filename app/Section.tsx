import React from "react";

import { Blog } from "./components/Blog";
import { cn } from "../utils/cn";
import { SectionTitle } from "./components/SectionTitle";
import { Container } from "./components/Container";
import imaaaage from "../public/Dirty_Zuk_Gta_edition.png";
import { Pagination, ConfigProvider } from "antd";

type SectionProps = {
  title: string;
  children: React.ReactNode;
  blog: true | false;
};

export const blogData = [
  {
    index: 1,
    title: "STIX IS IN THE TRASHBIN",
    date: "11.5.2025",
    desc: "We are now Cutting Edge Raiders. This moment wasn’t luck. It wasn’t a fluke. It was earned—through dedication, through perseverance, through trust in each other. We took what was once just a dream and made it our reality.",
    url: imaaaage,
  },
  {
    index: 2,
    title: "SPROCKET FAILED HIS LAST TEST",
    date: "10.5.2025",
    desc: "We are now Cutting Edge Raiders. This moment wasn’t luck. It wasn’t a fluke. It was earned—through dedication, through perseverance, through trust in each other. We took what was once just a dream and made it our reality.",
    url: imaaaage,
  },
];

export const Section = ({ title, children, blog }: SectionProps) => {
  if (blog) {
    return (
      <Container className={cn("flex flex-col items-center space-y-6")}>
        <SectionTitle sectionTitle={title} />
        <Container
          className={cn("items-center flex flex-col max-w-[1400px] mt-0")}
        >
          {blogData.map((blog) => (
            <Blog
              key={blog.index}
              title={blog.title}
              date={blog.date}
              description={blog.desc}
              url={blog.url}
            />
          ))}
        </Container>
        <button className="bg-primary py-2 px-3 w-24 hover:bg-white hover:cursor-pointer hover:text-primary transition-colors duration-200">
          <a href={`/${title}`}>All {title}</a>
        </button>
      </Container>
    );
  } else {
    return (
      <Container className={cn("flex items-center flex-col space-y-10")}>
        <SectionTitle sectionTitle={title} />
        {children}
      </Container>
    );
  }
};
