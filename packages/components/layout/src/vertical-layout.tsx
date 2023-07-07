import React from "react";

export interface VerticalLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const VerticalLayout: React.FC<VerticalLayoutProps> = ({ className = "", children, ...other }) => {
  const layoutClass = "flex flex-col";
  return (
    <div className={`${className} ${layoutClass}`} {...other}>
      {children}
    </div>
  );
};

export default VerticalLayout;

VerticalLayout.displayName = "VerticalLayout";
