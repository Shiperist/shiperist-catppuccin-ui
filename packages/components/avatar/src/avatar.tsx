import React, { FC, ReactNode } from "react";
import { ColorSet, Size, cn, LoadingIcon, Radius } from "@shiperist-catppuccin-ui/utilities";

export interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
  size?: Size | "tiny";
  avatar?: string;
  alt?: string;
  radius?: Radius;
  border?: "xlarge" | "large" | "medium" | "small" | "none";
  defaultAvatar?: string;
  backgroundColor?: ColorSet;
  name?: string;
  isLoading?: boolean;
  children?: ReactNode;
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
    "flex items-center justify-center relative",
    `rounded-${radius}`,
    {
      [`bg-${backgroundColor}`]: !(avatar || defaultAvatar),
    },
    className
  );

  return (
    <div className={avatarContainerClassName} style={containerStyle}>
      {isLoading && <LoadingIcon className="m-auto" />}
      {!isLoading && (
        <>
          {avatar ? (
            <img
              loading="lazy"
              src={avatar}
              alt={alt}
              className="flex items-center justify-center rounded-full"
              style={{
                ...containerStyle,
                opacity: isLoading ? 0 : 1,
              }}
              {...props}
            />
          ) : (
            <span
              className={cn("text-white font-bold", {
                "text-xl": size === "large" || size === "medium",
                "text-4xl": size === "xlarge",
                "text-xs": size === "small",
              })}>
              {!(avatar || defaultAvatar) && getInitials(name)}
            </span>
          )}
        </>
      )}
      <div>{children}</div>
    </div>
  );
};

Avatar.displayName = "Avatar";

export default Avatar;
