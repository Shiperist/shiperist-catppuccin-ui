export interface TextareaProps extends Omit<React.HTMLAttributes<HTMLTextAreaElement>, "onChange"> {
  /**
   * Sets the size of the textarea.
   * Possible values:
   * - "small": A small-sized textarea.
   * - "medium": A medium-sized textarea (default size).
   * - "large": A large-sized textarea.
   */
  size?: "small" | "medium" | "large";

  /**
   * Specifies whether the textarea is disabled. When set to true, the textarea becomes non-interactive
   * and its functionality is not available to users.
   */
  disabled?: boolean;

  /**
   * Sets the placeholder text to display when no text is entered in the textarea.
   * The placeholder provides a hint to the user about the expected input.
   */
  placeholder?: string;

  /**
   * Sets the current value of the textarea. This value represents the content of the textarea.
   */
  value?: string;

  /**
   * Sets the default value for the textarea. This value represents the initial content of the textarea.
   */
  defaultValue?: string;

  /**
   * Sets the resizing behavior of the textarea.
   * Possible values:
   * - "none": The textarea cannot be resized (default behavior).
   * - "vertical": The textarea can be resized vertically.
   * - "horizontal": The textarea can be resized horizontally.
   * - "both": The textarea can be resized both vertically and horizontally.
   */
  resize?: "none" | "vertical" | "horizontal" | "both";

  /**
   * The event handler for when the content of the textarea changes.
   * It takes two arguments: the event object and an object containing the new value of the textarea.
   */
  onChange?: (ev: React.ChangeEvent<HTMLTextAreaElement>, data: OnChangeData) => void;
}

// OnChangeData type represents the data passed to the onChange event handler of the TextareaProps interface.
export type OnChangeData = {
  /**
   * The new value of the textarea after the change.
   */
  value: string;
};
