import React from "react";

type SectionTitleProps = {
  sectionTitle: string;
};

export const SectionTitle = ({ sectionTitle }: SectionTitleProps) => {
  return (
    <div className="flex w-full items-center space-x-4">
      <hr className="flex-grow border-t-1 border-secondary" />
      <div className="text-4xl text-[#D3D3D3] uppercase">{sectionTitle}</div>
      <hr className="flex-grow border-t-1 border-secondary" />
    </div>
  );
};
