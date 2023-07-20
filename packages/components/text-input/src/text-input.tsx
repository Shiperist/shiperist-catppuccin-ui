import React, { FC, ReactNode, useState } from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "password";
  leadingElement?: ReactNode;
  trailingElement?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  caption?: string;
  label?: string;
  errorIcon?: boolean;
  labelStyle?: "default" | "border";
  appearance?: "outline" | "underline";
}

const TextInput: FC<TextInputProps> = ({
  leadingElement,
  trailingElement,
  appearance = "outline",
  labelStyle = "default",
  errorIcon,
  required,
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
    outline: "ring-0 border rounded-lg",
    underline: "ring-0 border-b",
  }[appearance];

  const VisiblePasswordIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  );

  const HiddenPasswordIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

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
  if (error && errorIcon) {
    trailingElement = (
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
        className="stroke-red">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" x2="12" y1="8" y2="12" />
        <line x1="12" x2="12.01" y1="16" y2="16" />
      </svg>
    );
  }
  if (type == "password") {
    trailingElement = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [inputType, setInputType] = useState(type);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleEye = () => {
    setIsPasswordVisible(!isPasswordVisible);
    setInputType(isPasswordVisible ? type : "text");
  };

  return (
    <div className={cn("flex flex-col relative", className)} style={label && label.length > 0 ? { gap: 8 } : undefined}>
      <label
        className={labelStyle === "border" ? "absolute bg-base px-2" : ""}
        style={{
          zIndex: labelStyle === "border" ? 10 : undefined,
          top: labelStyle === "border" ? -12 : undefined,
          left: labelStyle === "border" ? 8 : undefined,
        }}>
        {label} {label && required && <span className="text-red">*</span>}
      </label>
      <div
        className={cn(
          "flex w-full h-full transition duration-150 ease-in-out flex-row px-4 bg-transparent h-12 py-2",
          textInputAppearance,
          {
            "opacity-50 cursor-not-allowed": disabled,
            "hover:border-overlay1": !disabled && !isInputFocused && !error,
            "border-red": error,
            "border-overlay0": !error,
            "border-overlay2": isInputFocused && !error,
          },
          className
        )}>
        {leadingElement && <div className={cn("stroke-overlay1 py-1")}>{leadingElement}</div>}
        <input
          className={cn(`bg-transparent outline-none flex-grow mx-1`, {
            "cursor-not-allowed": disabled,
            "text-red": error,
            "text-text": !error,
          })}
          type={inputType}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...props}
        />
        {trailingElement && (
          <div
            onClick={type == "password" ? handleEye : undefined}
            className={cn("stroke-overlay1 py-1", { "cursor-pointer": type == "password" })}>
            {type === "password" ? (
              isPasswordVisible ? (
                <VisiblePasswordIcon />
              ) : (
                <HiddenPasswordIcon />
              )
            ) : (
              trailingElement
            )}
          </div>
        )}
      </div>
      {caption && <p className={cn("pt-2 text-sm", { "text-red": error, "text-text": !error })}>{caption}</p>}
    </div>
  );
};

export default TextInput;

TextInput.displayName = "TextInput";
