import React from "react";
import { Tab, TabsProps, tabsContainerClass } from ".";
import { cn } from "@shiperist-catppuccin-ui/utilities";

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const { className = "", children, orientation, appearance, size, ...other } = props;
  const containerClass = tabsContainerClass(orientation, appearance);
  return (
    <div className={cn({ "rounded-md": appearance === "boxed" })}>
      <div ref={ref} className={cn(containerClass, className)} {...other}>
        {React.Children.toArray(children).map((child: React.ReactElement, index) => {
          if (child.type === Tab) {
            const isFirstTab = index === 0;
            const isLastTab = index === React.Children.count(children) - 1;

            if (appearance === "boxed") {
              return (
                <div
                  key={index}
                  className={cn("bg-mantle px-1 py-1", {
                    "rounded-bl-md rounded-tl-md": isFirstTab && orientation !== "vertical",
                    "rounded-br-md rounded-tr-md": isLastTab && orientation !== "vertical",
                    "rounded-tl-md rounded-tr-md": isFirstTab && orientation === "vertical",
                    "rounded-bl-md rounded-br-md": isLastTab && orientation === "vertical",
                  })}>
                  {React.cloneElement(child, {
                    size: size,
                    appearance: appearance,
                  })}
                </div>
              );
            } else {
              return React.cloneElement(child, {
                size: size,
                appearance: appearance,
                orientation: orientation,
              });
            }
          }
          return child;
        })}
      </div>
    </div>
  );
});

Tabs.displayName = "Tabs";
