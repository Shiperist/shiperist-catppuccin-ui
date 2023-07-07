import React, { FC } from "react";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Divider: FC<DividerProps> = ({ className = "", children, ...other }) => {
  const dividerClass = "mx-auto mt-2 mb-1 w-full bg-lavender rounded-lg";
  return (
    <div className={`${className} ${dividerClass}`} {...other} style={{ height: "1px" }}>
      {children}
    </div>
  );
};

export default Divider;

Divider.displayName = "Divider";
