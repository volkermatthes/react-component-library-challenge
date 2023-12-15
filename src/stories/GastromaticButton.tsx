import styled from "styled-components";

const sizeStyles = {
  small: `
    padding: 6px 8px;
    font-size: 12px;
  `,
  default: `
    padding: 12px 16px;
    font-size: 14px;
  `
};

const typeStyles = {
  default: `
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #e1e6f2;
    box-shadow: 0 1px 2px #1018280D;

    &:hover {
      background-color: #e1e6f2;
      border-color: #343b5a;
    }
    
    &:focus {
      border-color: #4c526c;
      box-shadow: 0 1px 2px #0000001A, 0 0 0 2px #343B5A33;
    }
    
    &:active,
    &:focus:active {
      background-color: #9aa0b1;
      border-color: #4c526c;
      box-shadow: none;
    }

    &:disabled {
      color: #686d7e;
      cursor: default;
      background-color: #ffffff;
      border: 1px solid #e1e6f2;
      box-shadow: 0 1px 2px #1018280D;
    }
  `,
  primary: `
    background-color: #6160f6;
    color: #ffffff;
    border: none;
    
    &:hover {
      background-color: #8887f9;
    }

    &:active,
    &:hover:active,
    &:focus:active {
      background-color: #6160F6;
      border: none;
      box-shadow: none;
    }
    
    &:focus {
      border: 1px solid #4746d3;
      box-shadow: 0 1px 2px #0000001A, 0 0 0 2px #c0c0fe;
    }

    &:disabled,
    &:active:disabled {
      background-color: #8887F9;
      color: #c0c0fe;
      cursor: default;
    }
  `,
  danger: `
    background-color: #ff5047;
    color: #ffffff;
    border: none;

    &:hover {
      background-color: #ff8775;
    }
    
    &:focus {
      border: 1px solid #db3339;
      background-color: #ff5047;
      box-shadow: 0 1px 2px #0000001A, 0 0 0 2px #ffcbb5;
    }
    
    &:focus:active,
    &:active {
      background-color: #ff5047;
      border: none;
      box-shadow: none;
    }
    
    &:disabled {
      background-color: #ffa890;
      color: #ffcbb5;
      cursor: default;
      border: none;
      box-shadow: none;
    }
  `
};

const StyledButton = styled.button<{ $size: 'default' | 'small', $type: string }>`
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  margin: 15px;

  ${props => props.$size === 'small' ? sizeStyles.small : sizeStyles.default }
  ${props => props.$type === 'default' ? typeStyles.default : props.$type === 'primary' ? typeStyles.primary : typeStyles.danger}
`;

/**
   * My Code Challenge Gastromatic Button 
*/
interface ButtonProps {
  /**
   * The button comes in two sizes: 'small' and 'default'
   */
  size?: 'small' | 'default';
  /**
   * The types of buttons are 'default', 'primary' and 'danger'. They set the background color and hover/click effects.
   */
  type?: 'default' | 'primary' | 'danger';
  text: string;
  disabled?: boolean;
}


export default function Button ({size = 'default', type = 'default', text, disabled = false}: ButtonProps) {
  return (
      <StyledButton $size={size} $type={type} disabled={disabled}>
        {text}
      </StyledButton>
    );
}