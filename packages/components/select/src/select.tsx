import React, { FC, useState, useRef, useEffect } from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export interface SelectProps {
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: string;
  as?: "button" | "input";
  children: React.ReactElement[] | React.ReactElement;
}

const Select: FC<SelectProps & React.HTMLAttributes<HTMLDivElement>> = ({
  disabled,
  defaultValue,
  as = "button",
  placeholder,
  className = "",
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showRingEffect, setShowRingEffect] = useState(false);
  const [value, setValue] = useState("");
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelectOpen = () => {
    setIsOpen((prevState) => !prevState);
    setShowRingEffect(false);
  };

  const handleSelectItemClick = (itemValue: string) => {
    setValue(itemValue);
    setIsOpen(false);
    setShowRingEffect(true);
    selectRef.current?.focus();
  };

  const handleInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!selectRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
        if (showRingEffect) {
          setShowRingEffect(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showRingEffect]);

  const trailingElement = (
    <svg
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );

  const Element = as;

  const filteredChildren =
    as === "input"
      ? React.Children.toArray(children).filter((child) => {
          if (React.isValidElement(child)) {
            const childContent = String(child.props.children).toLowerCase();
            const searchValue = value.toLowerCase();
            return childContent.includes(searchValue);
          }
          return false;
        })
      : React.Children.toArray(children);

  return (
    <div className={cn("relative", className)} ref={selectRef} {...props}>
      {Element === "input" ? (
        <div
          className={cn(
            "w-full flex flex-row border border-overlay0 transition duration-150 ease-in-out bg-transparent rounded-lg items-center px-4 h-12 py-2",
            {
              "opacity-50 cursor-not-allowed": disabled,
              "hover:border-overlay2": !disabled,
              "ring ring-overlay2": showRingEffect,
            }
          )}>
          <Element
            type="text"
            disabled={disabled}
            onClick={!disabled ? handleSelectOpen : undefined}
            onChange={handleInputText}
            placeholder={placeholder}
            value={value}
            className={cn("w-full bg-transparent outline-none flex-grow")}></Element>
          {trailingElement && <div className={cn("stroke-overlay2")}>{trailingElement}</div>}
        </div>
      ) : (
        <Element
          onClick={!disabled ? handleSelectOpen : undefined}
          className={cn(
            "flex w-full transition duration-150 ease-in-out rounded-lg items-center bg-transparent border border-overlay0 flex-row px-4 h-12 py-2",
            {
              "opacity-50 cursor-not-allowed": disabled,
              "hover:border-overlay2": !disabled,
              "ring ring-overlay2": showRingEffect,
            }
          )}>
          <div className="flex-grow text-left">
            {/* Placeholder */}
            {placeholder && !value && !defaultValue && <p className="text-overlay2">{placeholder}</p>}

            {/* Value or Default Value */}
            {(value || defaultValue) && <p>{value || defaultValue}</p>}
          </div>
          {trailingElement && <div className={cn("stroke-overlay2 py-1")}>{trailingElement}</div>}
        </Element>
      )}
      {isOpen && (
        <div
          className={cn("flex flex-col w-full z-10 mt-2 absolute rounded-lg max-h-[250px] overflow-y-auto", {
            "border border-overlay0": filteredChildren.length > 0,
            "border-none border-transparent": filteredChildren.length === 0,
          })}>
          {filteredChildren.map((child: React.ReactElement, index: number) => {
            const isLastItem = index === filteredChildren.length - 1;
            const itemStyle = isLastItem ? { borderBottom: 0 } : {};

            return React.cloneElement(child, {
              onClick: () => handleSelectItemClick(child.props.children),
              style: itemStyle,
            });
          })}
        </div>
      )}
    </div>
  );
};

Select.displayName = "Select";

export default Select;
