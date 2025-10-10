import React from "react";
import { cn } from "../../utils/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("mx-auto mt-10 w-full", className)}>{children}</div>
  );
};
