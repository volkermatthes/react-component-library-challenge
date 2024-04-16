import styled from "styled-components";

const styles = {
  enabled: {
    unchecked: `
        background-color: #fff;
        border: 1px solid #e1e6f2;
      `,
    checked: ` background-color: #6160F6;
        border: 1px solid #6160F6;`,
  },
  disabled: {
    unchecked: ` background-color: #e1e6f2;
        border: 1px solid #E1E6F2;
        cursor: not-allowed;
        `,
    checked: `background-color: #A09FFC;
        border: 1px solid #A09FFC;
        cursor: not-allowed;
        `,
  },
};

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const CheckboxHidden = styled.input<{ checked: boolean }>`
  opacity: 0;
  position: absolute;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

const CheckboxCustom = styled.div<{ $isChecked: boolean; $disabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 20px;
  height: 20px;
  cursor: pointer;

  ${({ $isChecked }) => styles.enabled[$isChecked ? "checked" : "unchecked"]}

  ${({ $disabled, $isChecked }) =>
    $disabled && styles.disabled[$isChecked ? "checked" : "unchecked"]}
`;

export { CheckboxCustom, CheckboxHidden, Label };
