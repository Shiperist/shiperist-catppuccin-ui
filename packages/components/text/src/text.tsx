import React from "react";

const Text: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className = "", children, ...other }) => {
  const textClass = "text-base text-text";
  return (
    <p className={`${className} ${textClass}`} {...other}>
      {children}
    </p>
  );
};

export default Text;

Text.displayName = "Text";
