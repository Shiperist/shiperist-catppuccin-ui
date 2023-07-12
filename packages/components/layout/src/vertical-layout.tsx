import React, { FC } from "react";

export interface VerticalLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const VerticalLayout: FC<VerticalLayoutProps> = ({ className = "", children, ...props }) => {
  const layoutClass = "flex flex-col";
  return (
    <div className={`${className} ${layoutClass}`} {...props}>
      {children}
    </div>
  );
};

export default VerticalLayout;

VerticalLayout.displayName = "VerticalLayout";
