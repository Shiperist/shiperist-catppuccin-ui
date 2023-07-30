import React, { ReactNode, cloneElement, isValidElement } from "react";
import { ColorSet, Size, cn, LoadingIcon, Radius, Border } from "@shiperist-catppuccin-ui/utilities";
import { AvatarLabel, AvatarLabelProps } from ".";

export interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
  size?: Size | "tiny";
  avatar?: string;
  alt?: string;
  radius?: Radius;
  border?: Border;
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
    border,
    alt,
    className = "",
    children,
    ...other
  } = props;
  const borderClass = border[border] || 0;
  const sizeClass =
    {
      tiny: 16,
      small: 32,
      medium: 64,
      large: 128,
      xlarge: 256,
    }[size] || 64;
  const textClass =
    {
      small: "text-xs",
      large: "text-xl",
      medium: "text-xl",
      xlarge: "text-4xl",
    }[size] || "";
  const radiusClass =
    {
      full: "rounded-full",
      large: "rounded-3xl",
      medium: "rounded-xl",
      small: "rounded-lg",
    }[radius] || "rounded-3xl";

  const containerStyle = {
    height: `${sizeClass}px`,
    width: `${sizeClass}px`,
    borderWidth: border === "none" ? 0 : (borderClass ?? 0) + "px",
    ...other.style,
  };

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
        return cloneElement(child, { className: textClass } as AvatarLabelProps);
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
    <div ref={ref} className={cn(avatarContainerClassName, radiusClass)} style={containerStyle}>
      {isLoading && <LoadingIcon className="m-auto" />}
      {!isLoading && (
        <>
          {avatar || defaultAvatar ? (
            <img
              loading="lazy"
              src={avatar}
              alt={alt}
              className={cn(`object-cover`, radiusClass)}
              style={{
                ...containerStyle,
                opacity: isLoading ? 0 : 1,
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
