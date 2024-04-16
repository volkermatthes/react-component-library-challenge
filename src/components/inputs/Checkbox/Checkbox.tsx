import React, { useState } from "react";
import { CheckboxProps } from "../../../types";
import { CheckboxCustom, CheckboxHidden, Label } from "./Checkbox.styles";
import CheckmarkIcon from "../../icons/CheckmarkIcon";

const Checkbox = ({
  label,
  disabled = false,
  isChecked,
  value,
  name,
  handleClick,
}: CheckboxProps) => {
  const [, setIsChecked] = useState(isChecked);

  const handleChange = () => {
    setIsChecked(!isChecked);
    handleClick && handleClick();
  };
  return (
    <Label htmlFor={label}>
      <CheckboxCustom
        onClick={handleChange}
        $isChecked={isChecked}
        $disabled={disabled}
      >
        {isChecked && <CheckmarkIcon width={14} height={14} />}
      </CheckboxCustom>
      <CheckboxHidden
        id={label}
        type="checkbox"
        name={name}
        value={value}
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
      ></CheckboxHidden>
      {label}
    </Label>
  );
};

export default Checkbox;
