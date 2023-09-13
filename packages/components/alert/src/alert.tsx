import React from "react";
import { cn, colorClass } from "@shiperist-catppuccin-ui/utilities";
import { AlertProps, alertBaseClass, alertIconColor } from ".";

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    variant = "base",
    leadingElement,
    trailingElement,
    appearance = "outline",
    size = "medium",
    className = "",
    children,
    style,
    ...other
  } = props;

  const iconColor = alertIconColor(appearance, colorClass(variant));
  const containerStyles = cn(alertBaseClass(size, appearance, variant), className);

  return (
    <div
      ref={ref}
      className={containerStyles}
      style={{
        ...style,
      }}
      {...other}>
      {leadingElement && <div className={cn(iconColor)}>{leadingElement}</div>}
      {children && <div className={`w-full`}>{children}</div>}
      {trailingElement && <div className={cn(iconColor)}>{trailingElement}</div>}
    </div>
  );
});

Alert.displayName = "Alert";
