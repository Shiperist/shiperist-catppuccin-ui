import React, { FC } from "react";

export type TextInputAppearance = "outline" | "underline";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
  const containerClass = `flex w-full h-full flex-row px-4 bg-transparent ${textInputAppearance} h-12 py-2 ${
    error ? "border-red hover:border-red" : `${!disabled ? "hover:border-lavender" : ""}`
  } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;
  const iconClass = "textoverlay1";
  const captionClass = "pt-2 text-sm text-text";

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
      <div className={containerClass}>
        {currentLeadingElement && <div className={iconClass}>{currentLeadingElement}</div>}
        <input className={inputClass} disabled={disabled} {...props} />
        {currentTrailingElement && <div className={iconClass}>{currentTrailingElement}</div>}
      </div>
      {caption && <p className={captionClass}>{caption}</p>}
    </div>
  );
};

export default TextInput;

TextInput.displayName = "TextInput";
