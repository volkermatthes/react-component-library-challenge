import styled from "styled-components";

const variantStyles = {
  default: `
  background-color: #fff;
  color: #000;
  border: 1px solid #E1E6F2;
  border-color: #E1E6F2;

  &:hover {
    background-color: #E1E6F2;
    border: 1px solid #343B5A;
  }

  &:active {
    background-color: #9AA0B1;
    border: 1px solid #4C526C;
  }

  &:disabled {
    color: #686D7E;
    border: 1px solid #E1E6F2;
  }

  &:focus {
    border: 1px solid #4C526C;
    box-shadow: 0px 1px 2px 0px #0000001A, 0px 0px 0px 2px #343B5A33;
  }
  `,
  primary: `
  background-color: #6160F6;
  color: #fff;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 1;
  }

  &:disabled {
    background-color: #8887F9;
    color: #C0C0FE;
  }

  &:focus {
    border: 1px solid #4746D3;
    box-shadow: 0px 1px 2px 0px #0000001A, 0px 0px 0px 2px #C0C0FE;
  }
  `,
  danger: `
  background-color: #FF5047;
  color: #fff;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 1;
  }

  &:disabled {
    background-color: #FFA890;
    color: #FFCBB5;
  }

  &:focus {
    border: 1px solid #DB3339;
    box-shadow: 0px 1px 2px 0px #0000001A, 0px 0px 0px 2px #FFCBB5;
  }
  `,
};

const sizeStyles = {
  default: `
  height: 40px;
  padding: 0 16px;
  font-size: 14px;
  `,
  small: `
  height: 28px;
  padding: 0px 8px;
  font-size: 12px;
  `,
};

export const StyledButton = styled.button<{
  $size: "default" | "small";
  $variant: "default" | "primary" | "danger";
}>`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
  font-family: "Inter", sans-serif;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 1px 2px 0px #1018280d;
  cursor: "pointer";

  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}
`;
