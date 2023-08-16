import React, { useState, useRef, useEffect, LegacyRef, useMemo } from "react";
import { ChevronDownIcon, cn } from "@shiperist-catppuccin-ui/utilities";
import {
  SelectProps,
  SelectItem,
  selectInputStyles,
  selectButtonContainerClass,
  selectInputContainerClass,
  selectResultClass,
} from ".";

export const Select = React.forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
  const {
    disabled,
    defaultValue,
    variant = "button",
    size,
    placeholder,
    value: controlledValue,
    onChange,
    className = "",
    children,
    ...other
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [showRingEffect, setShowRingEffect] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
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

  const trailingElement = <ChevronDownIcon />;
  const Element = variant === "button" ? "button" : "input";

  const filteredChildren = useMemo(() => {
    if (variant === "input") {
      return React.Children.toArray(children).filter((child) => {
        if (React.isValidElement(child)) {
          const childContent = String(child.props.children).toLowerCase();
          const searchValue = String(selectedValue || "").toLowerCase();
          return childContent.includes(searchValue);
        }
        return false;
      });
    } else {
      return React.Children.toArray(children);
    }
  }, [variant, children, selectedValue]);

  if (variant === "input" && filteredChildren.length === 0) {
    filteredChildren.push(
      <SelectItem key="nothing-found" size={size} disabled>
        Nothing found.
      </SelectItem>
    );
  }

  const inputContainerStyles = cn(selectInputContainerClass(disabled, showRingEffect, size), className);
  const buttonContainerStyles = cn(selectButtonContainerClass(disabled, showRingEffect, size), className);
  const resultStyles = selectResultClass(
    filteredChildren.filter((child) => React.isValidElement(child)) as React.ReactElement[]
  );

  return (
    <div className={cn("relative")} ref={selectRef}>
      {Element === "input" ? (
        <div className={inputContainerStyles} {...other} style={{ ...other.style }}>
          <Element
            ref={ref as LegacyRef<HTMLInputElement>}
            type="text"
            disabled={disabled}
            onClick={!disabled ? handleSelectOpen : undefined}
            onChange={handleInputText}
            placeholder={placeholder}
            defaultValue={controlledValue !== undefined ? controlledValue : selectedValue || defaultValue || ""}
            className={selectInputStyles}></Element>
          {trailingElement && <div className={cn("stroke-overlay2")}>{trailingElement}</div>}
        </div>
      ) : (
        <Element
          ref={buttonRef}
          disabled={disabled}
          onClick={!disabled ? handleSelectOpen : undefined}
          className={buttonContainerStyles}
          {...other}>
          <div className="flex-grow text-left">
            {placeholder && !selectedValue && !defaultValue ? (
              <p className="text-overlay2">{placeholder}</p>
            ) : (
              <p>{selectedValue || defaultValue}</p>
            )}
          </div>
          {trailingElement && <div className={cn("stroke-overlay2 py-1")}>{trailingElement}</div>}
        </Element>
      )}
      {isOpen && (
        <div className={resultStyles}>
          {filteredChildren.map((child: React.ReactElement, index: number) => {
            const isLastItem = index === filteredChildren.length - 1;
            const itemStyle = isLastItem ? { borderBottom: 0 } : {};

            return React.cloneElement(child, {
              onClick: () =>
                !child.props.disabled && !child.props.isTitle
                  ? handleSelectItemClick(String(child.props.children))
                  : undefined,
              style: itemStyle,
              size: size,
            });
          })}
        </div>
      )}
    </div>
  );
});

Select.displayName = "Select";
