import React, { ReactNode, useState } from "react";
import {
  cn,
  getRGBAFromHex,
  VisiblePasswordIcon,
  HiddenPasswordIcon,
  LoadingIcon,
  ErrorCircleIcon,
} from "@shiperist-catppuccin-ui/utilities";

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  type?: "text" | "password";
  leadingElement?: ReactNode;
  trailingElement?: ReactNode;
  size?: "small" | "medium" | "large";
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
    size,
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

  const textInputAppearance =
    {
      outline: "ring-0 border rounded-xl",
      underline: "ring-0 border-b",
      filled: "ring-0 border-b rounded-xl",
    }[appearance] || "ring-0 border rounded-xl";
  const sizeClass =
    {
      small: "text-sm py-4 h-8",
      medium: "text-md py-6 h-12",
      large: "text-lg py-8 h-16",
    }[size] || "text-md py-6 h-12";
  const iconSizeClass =
    {
      small: "w-4 h-4",
      medium: "w-5 h-5",
      large: "w-6 h-6",
      xlarge: "h-7 w-7",
    }[size] || "w-5 h-5";

  let trailingElement: React.ReactNode = originalTrailingElement;
  if (isLoading) {
    trailingElement = <LoadingIcon className={iconSizeClass} />;
  } else if (error && errorIcon) {
    trailingElement = <ErrorCircleIcon className={iconSizeClass} />;
  } else if (type === "password") {
    trailingElement = <VisiblePasswordIcon className={iconSizeClass} />;
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

  const borderedAppearanceStyle = {
    zIndex: label && labelStyle === "border" ? 10 : undefined,
    top: label && labelStyle === "border" ? -12 : undefined,
    left: label && labelStyle === "border" ? 8 : undefined,
  };

  const backgroundColor = appearance === "filled" ? getRGBAFromHex("overlay2") : undefined;

  return (
    <div className={cn("flex flex-col relative", className)} style={label && label.length > 0 ? { gap: 8 } : undefined}>
      <label
        htmlFor={props.id}
        className={label && labelStyle === "border" ? "absolute bg-base px-2" : ""}
        style={borderedAppearanceStyle}>
        {label} {label && required && <span className="text-red">*</span>}
      </label>
      <div
        className={cn(
          "flex w-full h-full transition-all duration-150 ease-in-out flex-row items-center px-4",
          sizeClass,
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
        {leadingElement && <div className={cn("stroke-overlay1")}>{leadingElement}</div>}
        <input
          ref={ref}
          className={cn(`outline-none flex-grow mx-1 bg-transparent`, {
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
            className={cn("stroke-overlay1", { "cursor-pointer": type == "password" })}>
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
