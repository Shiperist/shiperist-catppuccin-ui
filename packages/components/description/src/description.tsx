import React from "react";

const Description: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className = "", children, ...other }) => {
  const textClass = "text-sm text-text";
  return (
    <p className={`${className} ${textClass}`} {...other}>
      {children}
    </p>
  );
};

export default Description;

Description.displayName = "Description";
