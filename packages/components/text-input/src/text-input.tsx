import React from "react";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leadingElement?: React.ElementType | string;
  trailingElement?: React.ElementType | string;
  loading?: boolean;
  disabled?: boolean;
  error?: boolean;
  caption?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  leadingElement: LeadingElement,
  trailingElement: TrailingElement,
  loading = false,
  disabled = false,
  error = false,
  caption,
  className = "",
  ...other
}) => {
  const baseClass = `flex flex-col ${className}`;
  const inputClass = `bg-transparent border-0 outline-none flex-grow placeholder-ctp-subtext2 text-text mx-1 ${
    disabled ? "cursor-not-allowed" : ""
  }`;
  const containerClass = `flex w-full h-full flex-row px-4 bg-transparent border ring-0 border-1 border-ctp-overlay1 rounded-lg h-12 py-2 ${
    error ? "border-red hover:border-red" : `${!disabled ? "hover:border-lavender" : ""}`
  } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;
  const iconClass = "text-ctp-overlay1";
  const captionClass = "pt-2 text-sm text-text";

  const currentTrailingElement = loading ? (
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
  ) : (
    TrailingElement && (typeof TrailingElement === "string" ? TrailingElement : <TrailingElement className="" />)
  );

  const currentLeadingElement =
    typeof LeadingElement === "string" ? LeadingElement : LeadingElement && <LeadingElement className="" />;

  return (
    <div className={baseClass}>
      <div className={containerClass}>
        {currentLeadingElement && <div className={iconClass}>{currentLeadingElement}</div>}
        <input className={inputClass} disabled={disabled} {...other} />
        {currentTrailingElement && <div className={iconClass}>{currentTrailingElement}</div>}
      </div>
      {caption && <p className={captionClass}>{caption}</p>}
    </div>
  );
};

export default TextInput;

TextInput.displayName = "TextInput";
