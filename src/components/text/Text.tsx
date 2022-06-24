import React from "react";
import "./text.css";

interface TextProps {
  label: string;
  fontSize: "small" | "medium" | "large";
  //colors taken from "https://brandfetch.com/cleverti.com"
  color?: "flamingo" | "mineShaft" | "havelockBlue";
}

export const Text = ({
  color,
  label,
  fontSize,
  ...props
}: TextProps) => (
  <h3
    className={`${fontSize} ${color}`}
    {...props}
  >
    {label}
  </h3>
);
