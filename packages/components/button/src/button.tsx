import React, { useState } from "react";
import { cn, LoadingIcon, colors, colorClass } from "@shiperist-catppuccin-ui/utilities";
import { ButtonProps, buttonBaseClass, buttonIconColor, buttonIconSizeClass } from ".";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    leadingElement: originalLeadingElement,
    trailingElement,
    isLoading,
    disabled,
    appearance = "outline",
    shape = "rounded",
    variant = "base",
    size = "medium",
    children,
    className = "",
    ...other
  } = props;

  let leadingElement: React.ReactNode = originalLeadingElement;

  const isOnlyIcon = (leadingElement || trailingElement) && !children; //Check if button has only leading or trailing element to render differently
  const iconSizeClass = buttonIconSizeClass[size] || buttonIconSizeClass.medium;
  const iconColor = buttonIconColor(colorClass(variant), appearance);
  const containerStyles = cn(buttonBaseClass(disabled, appearance, variant, shape, size, isOnlyIcon), className);

  leadingElement = isLoading && leadingElement ? <LoadingIcon className={iconSizeClass} /> : leadingElement;
  return (
    <button
      ref={ref}
      className={containerStyles}
      disabled={disabled}
      {...other}
      style={{
        ...other.style,
      }}>
      {leadingElement && (
        <div className={cn({ [iconColor]: !disabled, "stroke-surface2": disabled })}>{leadingElement}</div>
      )}
      <span className={`${children ? "mx-2" : ""}`}>{children}</span>
      {trailingElement && (
        <div className={cn({ [iconColor]: !disabled, "stroke-surface2": disabled })}>{trailingElement}</div>
      )}
    </button>
  );
});

Button.displayName = "Button";
