"use client";
import { ButtonHTMLAttributes, FC, ReactNode, useState } from "react";
import { Size } from "@shiperist-catppuccin-ui/utilities";

const variants = ["success", "warning", "danger", "info"] as const;

export type ButtonVariant = (typeof variants)[number];

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  tooltip?: string;
  variant?: ButtonVariant;
  size?: Size;
}

const Button: FC<ButtonProps> = ({
  icon: Icon,
  iconPosition = "left",
  loading = false,
  tooltip,
  variant = "success",
  size = "medium",
  children,
  className = "",
  ...other
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const baseClass =
    "transition ease-in-out duration-150 flex items-center justify-center rounded-lg bg-transparent border-1 active:translate-y-0.5";
  const variantColor = {
    success: "green",
    danger: "red",
    warning: "yellow",
    info: "blue",
  }[variant];
  const sizeClass =
    {
      small: "text-sm px-2 py-1",
      medium: "text-base px-4 py-2",
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

  const variantClass = variantColor
    ? `border-${variantColor} text-${variantColor} hover:bg-${variantColor} hover:text-base`
    : "";

  const buttonClasses = `${baseClass} ${variantClass} ${
    !children && (Icon || loading) ? iconSizeClass : sizeClass
  } ${className}`;

  const currentIcon = loading ? (
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
      className="h-4 w-4 animate-spin"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ) : (
    Icon && Icon
  );

  //TODO Implement tooltip
  return (
    <button
      className={buttonClasses}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      {...other}
    >
      {currentIcon && iconPosition === "left" && currentIcon}
      <span className={`${children ? "mx-2" : ""}`}>{children}</span>
      {currentIcon && iconPosition === "right" && currentIcon}
    </button>
  );
};

export default Button;

Button.displayName = "Button";
