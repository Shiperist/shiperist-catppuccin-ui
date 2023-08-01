import React, { ReactNode, useState, ButtonHTMLAttributes } from "react";
import { Size, cn, getRGBAFromHex, ColorVariants, LoadingIcon, colors } from "@shiperist-catppuccin-ui/utilities";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leadingElement?: ReactNode;
  trailingElement?: ReactNode;
  isLoading?: boolean;
  tooltip?: string;
  disabled?: boolean;
  appearance?: "filled" | "ghost" | "tint" | "outline" | "shadow";
  variant?: ColorVariants;
  size?: Size;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    leadingElement: originalLeadingElement,
    trailingElement,
    isLoading,
    disabled,
    tooltip,
    appearance,
    variant,
    size,
    children,
    className = "",
    ...other
  } = props;

  const [showTooltip, setShowTooltip] = useState(false);
  const colorClass = colors[variant] || colors.base;

  const sizeClass =
    {
      small: "text-sm px-2 h-8",
      medium: "text-md px-4 h-10",
      large: "text-lg px-5 h-12",
      xlarge: "text-xl px-7 h-16",
    }[size] || "text-md px-4 h-10";
  const appearanceClass =
    {
      filled: `bg-${colorClass} text-mantle hover:opacity-80 border border-transparent`,
      outline: `border border-${colorClass} text-${colorClass} hover:text-mantle hover:bg-${colorClass}`,
      ghost: `text-${colorClass} hover:bg-${colorClass} hover:text-mantle border border-transparent`,
      tint: `text-${colorClass} hover:opacity-80 border border-transparent`,
      shadow: `text-${colorClass} bg-mantle shadow-lg hover:bg-crust border border-transparent`,
    }[appearance] || `border border-${colorClass} text-${colorClass} hover:text-mantle hover:bg-${colorClass}`;
  const iconSizeClass =
    {
      small: "w-4 h-4",
      medium: "w-5 h-5",
      large: "w-6 h-6",
      xlarge: "h-7 w-7",
    }[size] || "w-5 h-5";

  const backgroundColor = appearance === "tint" ? getRGBAFromHex(colorClass) : undefined;
  let leadingElement: React.ReactNode = originalLeadingElement;
  leadingElement = isLoading ? <LoadingIcon className={iconSizeClass} /> : leadingElement;
  const iconColor = appearance === "filled" ? "stroke-base" : `stroke-${colorClass}`;

  return (
    <button
      ref={ref}
      className={cn(
        "transition-all ease-in-out duration-150 flex items-center justify-center rounded-xl group",
        {
          ["opacity-50 cursor-not-allowed border border-surface2"]: disabled,
          [`${appearanceClass} active:translate-y-0.5`]: !disabled,
        },
        sizeClass,
        className
      )}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      disabled={disabled}
      {...other}
      style={{
        backgroundColor,
        ...other.style,
      }}>
      {leadingElement && <div className={cn(iconColor, "transition group-hover:stroke-base")}>{leadingElement}</div>}
      <span className={`${children ? "mx-2" : ""}`}>{children}</span>
      {trailingElement && <div className={cn(iconColor, "transition group-hover:stroke-base")}>{trailingElement}</div>}
    </button>
  );
});

export default Button;

Button.displayName = "Button";
