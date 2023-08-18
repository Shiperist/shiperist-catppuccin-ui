import React, { useState } from "react";
import { MenuProps, menuContainerClass, menuResultClass, menuStyles } from ".";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  const {
    className = "",
    children,
    disabled,
    text,
    leadingElement,
    trailingElement,
    onHover,
    size = "medium",
    ...other
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const containerStyles = cn(menuContainerClass(disabled, size, isOpen), className);
  const resultStyles = menuResultClass(
    React.Children.toArray(children).filter((child) => React.isValidElement(child)) as React.ReactElement[],
    size
  );

  return (
    <div className={cn("")}>
      <div
        className={containerStyles}
        onClick={!disabled ? handleSelectOpen : undefined}
        onMouseEnter={!disabled && onHover ? handleSelectOpen : undefined}
        {...other}
        style={{ ...other.style }}>
        <div ref={ref} className={menuStyles}>
          {leadingElement && <div className={cn("stroke-overlay1 pr-2")}>{leadingElement}</div>}
          <div
            className="flex w-full items-center justify-center"
            style={{ marginLeft: leadingElement ? "0.2rem" : 0 }}>
            {text}
          </div>
          {trailingElement && <div className={cn("stroke-overlay1 pr-2")}>{trailingElement}</div>}
        </div>
      </div>
      {isOpen && (
        <div className={resultStyles}>
          {React.Children.toArray(children).map((child: React.ReactElement) => {
            return React.cloneElement(child, {
              size: size,
            });
          })}
        </div>
      )}
    </div>
  );
});

Menu.displayName = "Menu";
