import { Orientation, ColorVariants } from "@shiperist-catppuccin-ui/utilities";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Sets the appearance style of the card.
   * Possible values:
   * - "filled": A card with a solid background color and styled content.
   * - "shadow": A card with a shadow effect.
   * - "outline": A card with a colored outline and transparent background.
   * - "embed": A card used for embedding content from external sources.
   */
  appearance?: "filled" | "shadow" | "outline" | "embed";

  /**
   * Sets the orientation of the card content. This can control how the content is laid out inside the card.
   */
  orientation?: Orientation;

  /**
   * Sets the color variant of the card.
   */
  variant?: ColorVariants;

  /**
   * Sets the gap between elements inside the card.
   * This can be a string or number value representing the gap distance in CSS units.
   */
  gap?: string | number;

  /**
   * Specifies whether the card is disabled. When set to true, the card becomes non-interactive
   * and its functionality is not available to users.
   */
  disabled?: boolean;
}

export interface CardExtraProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Sets the gap between elements inside the card.
   * This can be a string or number value representing the gap distance in CSS units.
   */
  gap?: string | number;
  /**
   * Sets the orientation of the card content. This can control how the content is laid out inside the card.
   */
  orientation?: Orientation;
}
