import styled from "styled-components";
import { ButtonProps } from "../../../types";

export const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 5px;
  box-shadow: 0px 1px 2px 0px #1018280d;
  cursor: "pointer";

  ${(props) => sizeStyles[props.size]}
  ${(props) => variantStyles[props.variant].colorTheming}
  ${(props) => variantStyles[props.variant].state[props.state]}


  &:hover {
    ${(props) =>
      props.state !== "disabled"
        ? variantStyles[props.variant].state.hover
        : ""}
  }

  &:active {
    ${(props) =>
      props.state !== "disabled"
        ? variantStyles[props.variant].state.pressed
        : ""}
  }

  &:focus {
    ${(props) =>
      props.state !== "disabled"
        ? variantStyles[props.variant].state.focused
        : ""}
  }

  &:disabled {
    ${(props) => variantStyles[props.variant].state.disabled}
  }
`;

const variantStyles = {
  default: {
    state: {
      default: {},
      hover: { backgroundColor: "#E1E6F2", border: "1px solid #343B5A" },
      pressed: { backgroundColor: "#9AA0B1", border: " 1px solid #4C526C" },
      disabled: { color: "#686D7E", border: "1px solid #E1E6F2" },
      focused: {
        border: "1px solid #4C526C",
        boxShadow: "0px 1px 2px 0px #0000001A, 0px 0px 0px 2px #343B5A33",
      },
    },
    colorTheming: {
      backgroundColor: "#fff",
      color: "#000",
      borderColor: "#E1E6F2",
      border: "1px solid #E1E6F2",
    },
  },
  primary: {
    state: {
      default: {},
      hover: { opacity: 0.7 },
      pressed: { opacity: 1 },
      disabled: { backgroundColor: "#8887F9", color: "#C0C0FE" },
      focused: {
        border: "1px solid #4746D3",
        boxShadow: "0px 1px 2px 0px #0000001A, 0px 0px 0px 2px #C0C0FE",
      },
    },
    colorTheming: {
      backgroundColor: "#6160F6",
      color: "#fff",
    },
  },
  danger: {
    state: {
      default: {},
      hover: { opacity: 0.7 },
      pressed: { opacity: 1 },
      disabled: {
        backgroundColor: "#FFA890",
        color: "#FFCBB5",
      },
      focused: {
        border: "1px solid #DB3339",
        boxShadow: "0px 1px 2px 0px #0000001A, 0px 0px 0px 2px #FFCBB5",
      },
    },
    colorTheming: {
      backgroundColor: "#FF5047",
      color: "#fff",
    },
  },
};

const sizeStyles = {
  default: {
    height: "40px",
    padding: "0 16px",
    fontSize: "14px",
  },
  small: {
    height: "28px",
    padding: "0px 8px",
    fontSize: "12px",
  },
};
