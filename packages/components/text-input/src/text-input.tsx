import React, { useState } from "react";
import {
  cn,
  VisiblePasswordIcon,
  HiddenPasswordIcon,
  LoadingIcon,
  ErrorCircleIcon,
} from "@shiperist-catppuccin-ui/utilities";
import {
  TextInputProps,
  textInputClass,
  textInputContainerClass,
  textInputIconSizeClass,
  textInputLabelAppearanceBorderClass,
  textInputOverlayClass,
} from ".";

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
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
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [inputType, setInputType] = useState(type);

  const containerClass = cn(textInputContainerClass, className);
  const overlayClass = textInputOverlayClass(size, disabled, error, isInputFocused, appearance);
  const textInputStyles = textInputClass(disabled, error);
  const iconSizeClass = textInputIconSizeClass[size] || textInputIconSizeClass.medium;
  const borderedAppearanceStyle = textInputLabelAppearanceBorderClass(label, labelStyle);

  let trailingElement: React.ReactNode = originalTrailingElement;
  if (isLoading) {
    trailingElement = <LoadingIcon className={iconSizeClass} />;
  } else if (error && errorIcon) {
    trailingElement = <ErrorCircleIcon className={cn(iconSizeClass, "stroke-red")} />;
  } else if (type === "password") {
    trailingElement = <VisiblePasswordIcon className={iconSizeClass} />;
  }

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
    <div
      className={containerClass}
      style={label && label.length > 0 ? { ...other.style, gap: 8 } : undefined}
      {...other}>
      <label htmlFor={other.id} className={label && labelStyle === "border" ? borderedAppearanceStyle : "cursor-text"}>
        {label} {label && required && <span className="text-red">*</span>}
      </label>
      <div className={overlayClass}>
        {leadingElement && <div className={cn("stroke-overlay1")}>{leadingElement}</div>}
        <input
          ref={ref}
          className={textInputStyles}
          type={inputType}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...other}></input>
        {trailingElement && (
          <div
            onClick={!disabled && type === "password" ? handleEye : undefined}
            className={cn("stroke-overlay1", {
              "cursor-pointer": type === "password",
              "cursor-not-allowed": disabled,
            })}>
            {type === "password" ? (
              isPasswordVisible ? (
                <VisiblePasswordIcon className={iconSizeClass} />
              ) : (
                <HiddenPasswordIcon className={iconSizeClass} />
              )
            ) : (
              trailingElement
            )}
          </div>
        )}
      </div>
      {caption && (
        <p
          className={cn("pt-2 text-sm", {
            "text-red": error,
            "text-text": !error,
          })}>
          {caption}
        </p>
      )}
    </div>
  );
});

TextInput.displayName = "TextInput";
