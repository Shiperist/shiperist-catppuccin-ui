"use client";
import { ReactNode, useState, FC, ButtonHTMLAttributes } from "react";
import { Size, cn, getRGBAFromHex } from "@shiperist-catppuccin-ui/utilities";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leadingElement?: ReactNode;
  trailingElement?: ReactNode;
  loading?: boolean;
  tooltip?: string;
  disabled?: boolean;
  appearance?: "filled" | "ghost" | "tint" | "outline" | "shadow";
  variant?: "success" | "warning" | "danger" | "info" | "base";
  size?: Size;
}

const Button: FC<ButtonProps> = ({
  leadingElement,
  trailingElement,
  loading,
  disabled,
  tooltip,
  appearance = "outline",
  variant = "base",
  size = "medium",
  children,
  className = "",
  ...props
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const variantColor =
    {
      success: "green",
      danger: "red",
      warning: "yellow",
      info: "blue",
      base: "overlay2",
    }[variant] || "";
  const sizeClass =
    {
      small: "text-sm px-2 py-1",
      medium: "text-md px-4 py-2",
      large: "text-lg px-6 py-3",
      xlarge: "text-xl px-8 py-4",
    }[size] || "";
  const iconSizeClass =
    {
      small: "p-1",
      medium: "p-2",
      large: "p-3",
      xlarge: "p-4",
    }[size] || "";
  const appearanceClass =
    {
      filled: `bg-${variantColor} text-mantle`,
      outline: `border border-${variantColor} text-${variantColor} hover:text-mantle hover:bg-${variantColor}`,
      ghost: `text-${variantColor} hover:bg-${variantColor} hover:text-mantle`,
      tint: `text-${variantColor}`,
      shadow: `text-${variantColor} bg-mantle shadow-lg hover:bg-crust`,
    }[appearance] || "";

  const backgroundColor = appearance === "tint" ? getRGBAFromHex(variantColor) : undefined;
  if (loading) {
    leadingElement = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 animate-spin">
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    );
  }

  //TODO Implement tooltip
  return (
    <button
      className={cn(
        "transition ease-in-out duration-150 flex items-center justify-center rounded-lg",
        {
          ["opacity-50 cursor-not-allowed border border-surface2"]: disabled,
          [`${appearanceClass} active:translate-y-0.5`]: !disabled,
        },
        !children && loading ? iconSizeClass : sizeClass,
        className
      )}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      disabled={disabled}
      {...props}
      style={{
        backgroundColor,
        ...props.style,
      }}>
      {leadingElement && <div className={cn("stroke-overlay1")}>{leadingElement}</div>}
      <span className={`${children ? "mx-2" : ""}`}>{children}</span>
      {trailingElement && <div className={cn("stroke-overlay1")}>{trailingElement}</div>}
    </button>
  );
};

export default Button;

Button.displayName = "Button";
