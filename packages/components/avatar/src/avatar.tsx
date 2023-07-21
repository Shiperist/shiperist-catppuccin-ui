import React, { FC } from "react";
import { ColorSet, Size, cn, LoadingIcon } from "@shiperist-catppuccin-ui/utilities";

export interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
  size?: Size | "tiny";
  avatar?: string;
  alt?: string;
  radius?: "full" | "large" | "medium" | "small";
  border?: "xlarge" | "large" | "medium" | "small" | "none";
  defaultAvatar?: string;
  backgroundColor?: ColorSet;
  name?: string;
  isLoading?: boolean;
}

const Avatar: FC<AvatarProps> = ({
  avatar,
  radius = "full",
  defaultAvatar,
  name,
  isLoading,
  backgroundColor = "green",
  size = "large",
  border = "none",
  alt,
  className = "",
  children,
  ...props
}) => {
  const sizeClass = {
    tiny: 16,
    small: 32,
    medium: 64,
    large: 128,
    xlarge: 256,
  }[size];
  const borderClass = {
    small: 1,
    medium: 2,
    large: 3,
    xlarge: 4,
  }[border];

  // Function to extract initials from the name
  const getInitials = (name: string) => {
    const initials = name
      .split(" ")
      .map((part) => part.charAt(0).toUpperCase())
      .join("");
    return initials.slice(0, 3);
  };

  const containerStyle = {
    height: `${sizeClass}px`,
    width: `${sizeClass}px`,
    borderWidth: border === "none" ? 0 : (borderClass ?? 0) + "px",
    ...props.style,
  };

  const avatarContainerClassName = cn(
    "flex items-center justify-center",
    radius === "full" ? "rounded-full" : `rounded-${radius}`,
    {
      [`bg-${backgroundColor}`]: !(avatar || defaultAvatar),
    },
    className
  );

  return (
    <div className="relative">
      {isLoading && (
        <div className={avatarContainerClassName} style={containerStyle}>
          <LoadingIcon className="m-auto" />
        </div>
      )}

      {!isLoading && (
        <>
          {avatar ? (
            <img
              loading="lazy"
              src={avatar}
              alt={alt}
              className={avatarContainerClassName}
              style={{
                ...containerStyle,
                opacity: isLoading ? 0 : 1,
              }}
              {...props}
            />
          ) : (
            <div className={avatarContainerClassName} style={containerStyle}>
              {size !== "tiny" && (
                <span
                  className={cn("text-white font-bold", {
                    "text-xl": size === "large" || size === "medium",
                    "text-4xl": size === "xlarge",
                    "text-xs": size === "small",
                  })}>
                  {!(avatar || defaultAvatar) && getInitials(name)}
                </span>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

Avatar.displayName = "Avatar";

export default Avatar;
