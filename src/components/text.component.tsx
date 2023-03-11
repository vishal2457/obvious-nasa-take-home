import React from "react";
import clsx from "clsx";

interface TextProps {
  variant?: keyof typeof $variants;
  text?: string | number;
  children?: React.ReactNode;
  className?: string
}

export const Text = ({
  variant = "text",
  text,
  children,
  className = ''
}: TextProps) => {
  const classes = clsx([$variants[variant], "text-light m-0", className]);
  const content = text || children;
  if(!content) null;

  return <p className={classes}>{content}</p>;
};

const $variants = {
  "heading": "fs-1",
  "sub-heading": "fs-3",
  "text": "fs-6",
  "helper": "fs-8",
};
