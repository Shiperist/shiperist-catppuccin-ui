import React, { FC, ReactNode } from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export type TextInputAppearance = "outline" | "underline";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "password";
  leadingElement?: ReactNode;
  trailingElement?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  error?: boolean;
  caption?: string;
  label?: string;
  appearance?: TextInputAppearance;
}

const TextInput: FC<TextInputProps> = ({
  leadingElement,
  trailingElement,
  appearance = "outline",
  type = "text",
  placeholder,
  loading,
  disabled,
  error,
  caption,
  label,
  className = "",
  ...props
}) => {
  const textInputAppearance = {
    outline: "ring-0 border-1 border-overlay1 rounded-lg",
    underline: "ring-0 border-0 border-b border-overlay1",
  }[appearance];

  if (loading) {
    trailingElement = (
      <svg
        className="animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    );
  }

  return (
    <div className={cn("flex flex-col", className)} style={label && label.length > 0 ? { gap: 8 } : undefined}>
      <label>{label}</label>
      <div
        className={cn(
          "flex w-full h-full flex-row px-4 bg-transparent h-12 py-2",
          textInputAppearance,
          {
            "opacity-50 cursor-not-allowed": disabled,
            "hover:border-lavender": !disabled,
            "border-red hover:border-red": error,
          },
          className
        )}>
        {leadingElement && <div className={cn("stroke-overlay1 py-1")}>{leadingElement}</div>}
        <input
          className={cn(`bg-transparent outline-none flex-grow placeholder-subtext2 text-text mx-1`, {
            "cursor-not-allowed": disabled,
          })}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />
        {trailingElement && <div className={cn("stroke-overlay1 py-1")}>{trailingElement}</div>}
      </div>
      {caption && <p className={cn("pt-2 text-sm", { "text-red": error, "text-text": !error })}>{caption}</p>}
    </div>
  );
};

export default TextInput;

TextInput.displayName = "TextInput";
