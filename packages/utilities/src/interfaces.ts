import { TextProp } from "./inputTypes";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: TextProp;
  error?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}
