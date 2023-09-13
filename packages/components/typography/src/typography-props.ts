import { TextProp } from "@shiperist-catppuccin-ui/utilities";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Sets the HTML element or custom component to be rendered as the typography element.
   * @default span
   */
  as?: TextProp;

  /**
   * Specifies whether the typography element is in an error state.
   * When set to true, the typography may have a visual indication of an error (e.g., red color).
   * @default false
   */
  error?: boolean;

  /**
   * Specifies whether the typography element should be displayed in bold font-weight.
   * When set to true, the text will be rendered with a bold font-weight.
   * @default false
   */
  bold?: boolean;

  /**
   * Specifies whether the typography element should be displayed in italic style.
   * When set to true, the text will be rendered in italic style.
   * @default false
   */
  italic?: boolean;

  /**
   * Specifies whether the typography element should have an underline.
   * When set to true, the text will be underlined.
   * @default false
   */
  underline?: boolean;
}
