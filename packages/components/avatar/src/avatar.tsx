import React, { ReactNode, cloneElement, isValidElement } from "react";
import {
  ColorSet,
  Size,
  cn,
  LoadingIcon,
} from "@shiperist-catppuccin-ui/utilities";
import { AvatarLabel, AvatarLabelProps } from ".";

export interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
  size?: Size;
  avatar?: string;
  alt?: string;
  radius?: "none" | "large" | "full";
  defaultAvatar?: string;
  backgroundColor?: ColorSet;
  isLoading?: boolean;
  children?: ReactNode;
}

const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>((props, ref) => {
  const {
    avatar,
    radius,
    defaultAvatar,
    isLoading,
    backgroundColor,
    size,
    alt,
    className = "",
    children,
    ...other
  } = props;
  const sizeClass =
    {
      small: "w-8 h-8",
      medium: "w-12 h-12",
      large: "w-16 h-16",
      xlarge: "w-24 h-24",
    }[size] || "w-16 h-16";
  const textClass =
    {
      small: "text-sm",
      large: "text-3xl",
      medium: "text-xl",
      xlarge: "text-4xl",
    }[size] || "text-xl";
  const radiusClass =
    {
      full: "rounded-full",
      large: "rounded-2xl",
      none: "rounded-none",
    }[radius] || "rounded-2xl";

  const iconSizeClass =
    {
      small: "w-5 h-5",
      medium: "w-6 h-6",
      large: "w-8 h-8",
      xlarge: "h-10 w-10",
    }[size] || "w-6 h-6";

  const avatarContainerClassName = cn(
    "flex items-center justify-center relative inline-flex",
    {
      [`bg-${backgroundColor}`]: !(avatar || defaultAvatar),
    },
    className
  );
  // Function to filter AvatarLabel child component
  const renderAvatarLabels = () => {
    return React.Children.toArray(children).map((child) => {
      if (isValidElement(child) && child.type === AvatarLabel) {
        return cloneElement(child, {
          className: textClass,
        } as AvatarLabelProps);
      }
      return false;
    });
  };

  // Function to filter non-AvatarLabel child components
  const renderOtherChildren = () => {
    return React.Children.toArray(children).filter((child) => {
      if (isValidElement(child) && child.type !== AvatarLabel) {
        return true;
      }
      return false;
    });
  };

  return (
    <div
      ref={ref}
      className={cn(avatarContainerClassName, radiusClass, sizeClass)}
      style={{ ...other.style }}
    >
      {isLoading && (
        <LoadingIcon className={cn("stroke-overlay2 m-auto", iconSizeClass)} />
      )}
      {!isLoading && (
        <>
          {avatar || defaultAvatar ? (
            <img
              loading="lazy"
              src={avatar}
              alt={alt}
              className={cn(`object-cover`, radiusClass, sizeClass)}
              style={{
                ...other.style,
              }}
              {...other}
            />
          ) : (
            <>{renderAvatarLabels()}</>
          )}
        </>
      )}
      {renderOtherChildren()}
    </div>
  );
});

Avatar.displayName = "Avatar";

export default Avatar;
