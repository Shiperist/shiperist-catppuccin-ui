import React, { ReactNode, useState } from "react";
import {
  cn,
  getRGBAFromHex,
  VisiblePasswordIcon,
  HiddenPasswordIcon,
  LoadingIcon,
  ErrorCircleIcon,
} from "@shiperist-catppuccin-ui/utilities";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "password";
  leadingElement?: ReactNode;
  trailingElement?: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  caption?: string;
  label?: string;
  errorIcon?: boolean;
  labelStyle?: "default" | "border";
  appearance?: "outline" | "underline" | "filled";
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const {
    leadingElement,
    trailingElement: originalTrailingElement,
    appearance,
    labelStyle,
    errorIcon,
    required,
    type,
    placeholder,
    isLoading,
    disabled,
    error,
    caption,
    label,
    className = "",
    ...other
  } = props;

  const textInputAppearance = {
    outline: "ring-0 border rounded-lg",
    underline: "ring-0 border-b",
    filled: "ring-0 border-b rounded-lg",
  }[appearance];

  let trailingElement: React.ReactNode = originalTrailingElement;

  if (isLoading) {
    trailingElement = <LoadingIcon />;
  } else if (error && errorIcon) {
    trailingElement = <ErrorCircleIcon />;
  } else if (type === "password") {
    trailingElement = <VisiblePasswordIcon />;
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

  const backgroundColor = appearance === "filled" ? getRGBAFromHex("overlay2") : undefined;

  return (
    <div className={cn("flex flex-col relative", className)} style={label && label.length > 0 ? { gap: 8 } : undefined}>
      <label
        htmlFor={props.id}
        className={label && labelStyle === "border" ? "absolute bg-base px-2" : ""}
        style={{
          zIndex: label && labelStyle === "border" ? 10 : undefined,
          top: label && labelStyle === "border" ? -12 : undefined,
          left: label && labelStyle === "border" ? 8 : undefined,
        }}>
        {label} {label && required && <span className="text-red">*</span>}
      </label>
      <div
        className={cn(
          "flex w-full h-full transition duration-150 ease-in-out flex-row px-4 bg-transparent h-12 py-2",
          textInputAppearance,
          {
            "opacity-50 cursor-not-allowed": disabled,
            "hover:border-overlay2": !disabled && !isInputFocused && !error,
            "border-red": error,
            "border-overlay0": !error,
            "border-overlay2": isInputFocused && !error,
          },
          className
        )}
        style={appearance == "filled" ? { backgroundColor } : undefined}>
        {leadingElement && <div className={cn("stroke-overlay1 py-1")}>{leadingElement}</div>}
        <input
          ref={ref}
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
          {...other}
          style={{ ...other.style }}
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
});

export default TextInput;

TextInput.displayName = "TextInput";
