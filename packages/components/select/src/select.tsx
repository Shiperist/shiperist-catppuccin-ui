import React, {
  useState,
  useRef,
  useEffect,
  CSSProperties,
  LegacyRef,
  useMemo,
} from "react";
import { ChevronDownIcon, cn } from "@shiperist-catppuccin-ui/utilities";
import SelectItem from "./select-item";

export interface SelectProps {
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: string;
  variant?: "button" | "input";
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  style?: CSSProperties;
  children: React.ReactElement[] | React.ReactElement;
}

const Select = React.forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
  const {
    disabled,
    defaultValue,
    variant = "button",
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
    setSelectedValue(
      controlledValue !== undefined ? controlledValue : defaultValue
    );
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
      <SelectItem key="nothing-found" disabled>
        Nothing found.
      </SelectItem>
    );
  }

  return (
    <div className={cn("relative")} ref={selectRef}>
      {Element === "input" ? (
        <div
          className={cn(
            "border-overlay0 flex h-12 w-full flex-row items-center rounded-xl border px-4 py-2 transition duration-150 ease-in-out",
            {
              "cursor-not-allowed opacity-50": disabled,
              "hover:border-overlay2": !disabled,
              "ring-overlay2 ring": showRingEffect,
            },
            className
          )}
          {...other}
          style={{ ...other.style }}
        >
          <Element
            ref={ref as LegacyRef<HTMLInputElement>}
            type="text"
            disabled={disabled}
            onClick={!disabled ? handleSelectOpen : undefined}
            onChange={handleInputText}
            placeholder={placeholder}
            value={
              controlledValue !== undefined
                ? controlledValue
                : selectedValue || ""
            }
            className={cn("w-full flex-grow bg-transparent outline-none")}
          ></Element>
          {trailingElement && (
            <div className={cn("stroke-overlay2")}>{trailingElement}</div>
          )}
        </div>
      ) : (
        <Element
          ref={buttonRef}
          disabled={disabled}
          onClick={!disabled ? handleSelectOpen : undefined}
          className={cn(
            "border-overlay0 flex h-12 w-full flex-row items-center rounded-xl border px-4 py-2 transition duration-150 ease-in-out",
            {
              "cursor-not-allowed opacity-50": disabled,
              "hover:border-overlay2": !disabled,
              "ring-overlay2 ring": showRingEffect,
            },
            className
          )}
          {...other}
        >
          <div className="flex-grow text-left">
            {placeholder && !selectedValue && !defaultValue ? (
              <p className="text-overlay2">{placeholder}</p>
            ) : (
              <p>{selectedValue || defaultValue}</p>
            )}
          </div>
          {trailingElement && (
            <div className={cn("stroke-overlay2 py-1")}>{trailingElement}</div>
          )}
        </Element>
      )}
      {isOpen && (
        <div
          className={cn(
            "absolute z-50 mt-2 flex max-h-[250px] w-full flex-col overflow-y-auto rounded-xl",
            {
              "border-overlay0 border": filteredChildren.length > 0,
              "border-none border-transparent": filteredChildren.length === 0,
            }
          )}
        >
          {filteredChildren.map((child: React.ReactElement, index: number) => {
            const isLastItem = index === filteredChildren.length - 1;
            const itemStyle = isLastItem ? { borderBottom: 0 } : {};

            return React.cloneElement(child, {
              onClick: () =>
                !child.props.disabled
                  ? handleSelectItemClick(String(child.props.children))
                  : undefined,
              style: itemStyle,
            });
          })}
        </div>
      )}
    </div>
  );
});

Select.displayName = "Select";

export default Select;
