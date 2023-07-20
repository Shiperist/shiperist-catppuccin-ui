import React, { FC, useState, useRef, useEffect } from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";
import SelectItem from "./select-item";

export interface SelectProps {
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: string;
  variant?: "button" | "input";
  value?: string;
  onChange?: (value: string) => void;
  children: React.ReactElement[] | React.ReactElement;
}

const Select: FC<SelectProps & React.HTMLAttributes<HTMLDivElement>> = ({
  disabled,
  defaultValue,
  variant = "button",
  placeholder,
  value: controlledValue,
  onChange,
  className = "",
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showRingEffect, setShowRingEffect] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    controlledValue !== undefined ? controlledValue : defaultValue
  );

  useEffect(() => {
    setSelectedValue(controlledValue !== undefined ? controlledValue : defaultValue);
  }, [controlledValue, defaultValue]);

  const handleSelectOpen = () => {
    setIsOpen((prevState) => !prevState);
    setShowRingEffect(false);
  };

  const handleSelectItemClick = (itemValue: string) => {
    if (onChange) {
      onChange(itemValue);
      setSelectedValue(itemValue);
    } else {
      setSelectedValue(itemValue);
    }
    setIsOpen(false);
    setShowRingEffect(true);
    selectRef.current?.focus();
  };

  const handleInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSelectedValue(inputValue);
    if (onChange) {
      onChange(inputValue);
    }
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

  const Element = variant;

  const filteredChildren =
    variant === "input"
      ? React.Children.toArray(children).filter((child) => {
          if (React.isValidElement(child)) {
            const childContent = String(child.props.children).toLowerCase();
            const searchValue = String(selectedValue || "").toLowerCase();
            return childContent.includes(searchValue);
          }
          return <div>Nothing found</div>;
        })
      : React.Children.toArray(children);

  if (variant === "input" && filteredChildren.length === 0) {
    filteredChildren.push(
      <SelectItem key="nothing-found" disabled>
        Nothing found.
      </SelectItem>
    );
  }

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
            value={controlledValue !== undefined ? controlledValue : selectedValue || ""}
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
            {placeholder && !selectedValue && !defaultValue && <p className="text-overlay2">{placeholder}</p>}

            {/* Value or Default Value // CONTROLLED SELECT */}
            {selectedValue && <p>{selectedValue || defaultValue}</p>}
          </div>
          {trailingElement && <div className={cn("stroke-overlay2 py-1")}>{trailingElement}</div>}
        </Element>
      )}
      {isOpen && (
        <div
          className={cn("flex flex-col w-full z-50 mt-2 absolute rounded-lg max-h-[250px] overflow-y-auto", {
            "border border-overlay0": filteredChildren.length > 0,
            "border-none border-transparent": filteredChildren.length === 0,
          })}>
          {filteredChildren.map((child: React.ReactElement, index: number) => {
            const isLastItem = index === filteredChildren.length - 1;
            const itemStyle = isLastItem ? { borderBottom: 0 } : {};

            return React.cloneElement(child, {
              onClick: () => (!child.props.disabled ? handleSelectItemClick(String(child.props.children)) : undefined),
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
