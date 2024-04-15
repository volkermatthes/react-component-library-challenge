export type ButtonProps = {
  label?: string;
  size: "default" | "small";
  variant: "default" | "primary" | "danger";
  state: "default" | "hover" | "pressed" | "disabled" | "focused";
  disabled?: boolean;
  handleClick?: () => void;
};
