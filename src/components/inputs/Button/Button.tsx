import React from "react";
import { StyledButton } from "./Button.styles";
import { ButtonProps } from "../../../types";

const Button = ({
  label,
  size = "default",
  variant = "default",
  disabled = false,
  handleClick,
}: ButtonProps) => {
  return (
    <StyledButton
      $size={size}
      $variant={variant}
      disabled={disabled}
      onClick={handleClick}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
