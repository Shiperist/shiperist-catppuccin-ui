import { TextProp } from "@shiperist-catppuccin-ui/utilities";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Sets the HTML element or custom component to be rendered as the typography element.
   */
  as?: TextProp;

  /**
   * Specifies whether the typography element is in an error state.
   * When set to true, the typography may have a visual indication of an error (e.g., red color).
   */
  error?: boolean;

  /**
   * Specifies whether the typography element should be displayed in bold font-weight.
   * When set to true, the text will be rendered with a bold font-weight.
   */
  bold?: boolean;

  /**
   * Specifies whether the typography element should be displayed in italic style.
   * When set to true, the text will be rendered in italic style.
   */
  italic?: boolean;

  /**
   * Specifies whether the typography element should have an underline.
   * When set to true, the text will be underlined.
   */
  underline?: boolean;
}
