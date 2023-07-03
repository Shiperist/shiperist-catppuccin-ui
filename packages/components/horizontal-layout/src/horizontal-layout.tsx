import React, { FC } from "react";

export interface HorizontalLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const HorizontalLayout: FC<HorizontalLayoutProps> = ({ className = "", children, ...other }) => {
  const layoutClass = "flex flex-row";
  return (
    <div className={`${className} ${layoutClass}`} {...other}>
      {children}
    </div>
  );
};

export default HorizontalLayout;

HorizontalLayout.displayName = "HorizontalLayout";
