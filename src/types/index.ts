export type ButtonProps = {
  label?: string;
  size: "default" | "small";
  variant: "default" | "primary" | "danger";
  state: "default" | "hover" | "pressed" | "disabled" | "focused";
  disabled?: boolean;
  handleClick?: () => void;
};

export type CheckboxProps = {
  label?: string;
  isChecked: boolean;
  disabled?: boolean;
  value: string;
  name?: string;
  handleClick?: () => void;
};

export type CheckmarkIconProps = {
  width: number;
  height: number;
};
