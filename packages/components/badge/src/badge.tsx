import React from "react";
import { cn, colorClass } from "@shiperist-catppuccin-ui/utilities";
import { BadgeProps, badgeBackgroundColor, badgeBaseClass, badgeIconColor } from ".";

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const {
    leadingElement,
    trailingElement,
    variant = "base",
    appearance = "outline",
    className = "",
    children,
    ...other
  } = props;

  const backgroundColor = badgeBackgroundColor(appearance, colorClass(variant));
  const iconColor = badgeIconColor(appearance, colorClass(variant));
  const containerStyles = cn(badgeBaseClass(appearance, colorClass(variant)), className);

  return (
    <div
      ref={ref}
      className={containerStyles}
      {...other}
      style={{
        ...other.style,
        backgroundColor: backgroundColor,
      }}>
      {leadingElement && <div className={cn(iconColor)}>{leadingElement}</div>}
      {children && <span className="mx-1">{children}</span>}
      {trailingElement && <div className={cn(iconColor)}>{trailingElement}</div>}
    </div>
  );
});

Badge.displayName = "Badge";
