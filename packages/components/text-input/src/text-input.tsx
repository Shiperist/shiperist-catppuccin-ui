import React, { FC } from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export type TextInputAppearance = "outline" | "underline";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "password";
  leadingElement?: React.ElementType | string;
  trailingElement?: React.ElementType | string;
  loading?: boolean;
  disabled?: boolean;
  error?: boolean;
  caption?: string;
  appearance?: TextInputAppearance;
}

const TextInput: FC<TextInputProps> = ({
  leadingElement: LeadingElement,
  trailingElement: TrailingElement,
  appearance = "outline",
  type = "text",
  placeholder,
  loading,
  disabled,
  error,
  caption,
  className = "",
  ...props
}) => {
  const textInputAppearance = {
    outline: "ring-0 border-1 border-overlay1 rounded-lg",
    underline: "ring-0 border-0 border-b border-overlay1",
  }[appearance];

  const baseClass = `flex flex-col ${className}`;
  const inputClass = `bg-transparent outline-none flex-grow placeholdersubtext2 text-text mx-1 ${
    disabled ? "cursor-not-allowed" : ""
  }`;
  const containerClass = `flex w-full h-full flex-row px-4 bg-transparent ${textInputAppearance} h-12 py-2`;
  const errorClass = "border-red hover:border-red";
  const disabledClass = "opacity-50 cursor-not-allowed";
  const iconClass = "textoverlay1";
  const captionClass = "pt-2 text-sm";

  let currentTrailingElement = null;
  if (loading) {
    currentTrailingElement = (
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
  } else if (TrailingElement) {
    currentTrailingElement = typeof TrailingElement === "string" ? TrailingElement : <TrailingElement className="" />;
  }

  let currentLeadingElement = null;
  if (LeadingElement) {
    currentLeadingElement = typeof LeadingElement === "string" ? LeadingElement : <LeadingElement className="" />;
  }
  return (
    <div className={baseClass}>
      <div
        className={cn(
          containerClass,
          { [disabledClass]: disabled, "hover:border-lavender": !disabled, [errorClass]: error },
          className
        )}>
        {currentLeadingElement && <div className={iconClass}>{currentLeadingElement}</div>}
        <input className={inputClass} type={type} placeholder={placeholder} disabled={disabled} {...props} />
        {currentTrailingElement && <div className={iconClass}>{currentTrailingElement}</div>}
      </div>
      {caption && <p className={`${captionClass} ${error ? "text-red" : "text-text"}`}>{caption}</p>}
    </div>
  );
};

export default TextInput;

TextInput.displayName = "TextInput";
