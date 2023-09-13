import React, { cloneElement, isValidElement } from "react";
import { cn, LoadingIcon } from "@shiperist-catppuccin-ui/utilities";
import {
  AvatarLabel,
  AvatarLabelProps,
  AvatarProps,
  avatarBaseClass,
  avatarIconSizeClass,
  avatarShapeClass,
  avatarSizeClass,
  avatarTextClass,
} from ".";

export const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>((props, ref) => {
  const {
    image,
    shape = "rounded",
    icon,
    defaultImage,
    isLoading,
    backgroundColor = "surface1",
    size = "medium",
    alt,
    className = "",
    children,
    ...other
  } = props;

  const sizeClass = avatarSizeClass[size] || avatarSizeClass.medium;
  const textClass = avatarTextClass[size] || avatarTextClass.medium;
  const shapeClass = avatarShapeClass[shape] || avatarShapeClass.rounded;
  const iconSizeClass = avatarIconSizeClass[size] || avatarIconSizeClass.medium;
  const containerStyles = cn(avatarBaseClass(backgroundColor, image, defaultImage, shape, size), className);

  return (
    <div ref={ref} className={containerStyles} style={{ ...other.style }}>
      {isLoading && <LoadingIcon className={cn("stroke-overlay2 m-auto", iconSizeClass)} />}
      {!isLoading && (
        <>
          {image || defaultImage ? (
            <img
              loading="lazy"
              src={image}
              alt={alt}
              className={cn(`object-cover`, shapeClass, sizeClass)}
              style={{
                ...other.style,
              }}
              {...other}
            />
          ) : (
            <>
              {!icon ? (
                <>
                  {children &&
                    React.Children.toArray(children).map((child) => {
                      if (isValidElement(child) && child.type === AvatarLabel) {
                        return cloneElement(child, {
                          className: textClass,
                        } as AvatarLabelProps);
                      }
                      return false;
                    })}
                </>
              ) : (
                <>{icon}</>
              )}
            </>
          )}
        </>
      )}
      {children &&
        React.Children.toArray(children).filter((child) => {
          if (isValidElement(child) && child.type !== AvatarLabel) {
            return true;
          }
          return false;
        })}
    </div>
  );
});

Avatar.displayName = "Avatar";
