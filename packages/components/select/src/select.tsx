import React, { FC, useState, useRef, useEffect } from "react";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export interface SelectProps {
  disabled?: boolean;
  placeholder?: string;
  children: React.ReactElement[] | React.ReactElement;
}

// TODO: FIX HIDING RING WHEN BLUR

const Select: FC<SelectProps & React.HTMLAttributes<HTMLDivElement>> = ({
  disabled,
  placeholder,
  className = "",
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [selectEffect, setSelectEffect] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelectOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSelectEffect(false);
    }
  };

  const handleSelectClose = (event: MouseEvent) => {
    if (!selectRef.current?.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleSelectItemClick = (itemValue: string) => {
    setIsOpen(false);
    setValue(itemValue);
    setSelectEffect(true);
  };

  useEffect(() => {
    document.addEventListener("click", handleSelectClose);
    return () => {
      document.removeEventListener("click", handleSelectClose);
    };
  }, []);

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

  return (
    <div className={cn(className)} ref={selectRef} {...props}>
      <button
        onClick={!disabled ? handleSelectOpen : undefined}
        className={cn(
          "relative flex w-full transition duration-150 ease-in-out rounded-lg items-center bg-overlay0 flex-row px-4 h-12 py-2",
          {
            "opacity-50 cursor-not-allowed": disabled,
            "hover:bg-overlay1": !disabled,
            "ring ring-lavender": selectEffect,
          }
        )}>
        <div className="flex-grow text-left">{value ? <p>{value}</p> : <p className="text-text">{placeholder}</p>}</div>
        {trailingElement && <div className={cn("stroke-overlay2 py-1")}>{trailingElement}</div>}
      </button>
      {isOpen && (
        <div className={cn("flex flex-col w-full z-10 mt-2 rounded-lg max-h-[250px] overflow-y-auto")}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                onClick: () => handleSelectItemClick(child.props.children),
              } as React.DOMAttributes<HTMLButtonElement>);
            }
            return child;
          })}
        </div>
      )}
    </div>
  );
};

Select.displayName = "Select";

export default Select;
