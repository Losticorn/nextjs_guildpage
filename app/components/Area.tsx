import React from "react";
import { cn } from "../../utils/cn";

type AreaProps = {
  children: React.ReactNode,
  className: string,
};

export default function Area({ children, className }: AreaProps) {
  return (
    <div className={cn("flex flex-col p-4 m-2 text-white w-full", className)}>
      {children}
    </div>
  );
}
