import React from "react";
import { CheckmarkIconProps } from "../../types";

const CheckmarkIcon = ({ width, height }: CheckmarkIconProps) => {
  return (
    <svg viewBox="0 0 14 14" width={width} height={height} fill="none">
      <path
        d="M6.134 10.914c-.459.19-1.006.06-1.326-.35l-2.57-3.292a1.125 1.125 0 0 1 .199-1.582 1.133 1.133 0 0 1 1.587.198l1.669 2.139L9.92 1.515a1.133 1.133 0 0 1 1.563-.334c.525.338.675 1.036.335 1.559l-4.99 7.688a1.128 1.128 0 0 1-.694.486z"
        fill="#fff"
      />
    </svg>
  );
};

export default CheckmarkIcon;
