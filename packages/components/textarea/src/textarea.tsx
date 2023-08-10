import React from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";
import { OnChangeData, TextareaProps, textAreaClass } from ".";

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const {
    className = "",
    value,
    resize = "none",
    defaultValue,
    onChange,
    disabled,
    placeholder,
    size = "medium",
    children,
    ...other
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      const newData: OnChangeData = { value: event.target.value };
      onChange(event, newData);
    }
  };

  const textAreaStyles = cn(textAreaClass(size, resize, disabled), className);

  return (
    <textarea
      ref={ref}
      defaultValue={value || defaultValue}
      placeholder={placeholder}
      disabled={disabled}
      onChange={handleChange}
      className={textAreaStyles}
      {...other}>
      {children}
    </textarea>
  );
});

Textarea.displayName = "Textarea";
