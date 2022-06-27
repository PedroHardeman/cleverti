import React from "react";
import { StyledInput } from "./styles";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange?: (e: any) => void;
}

export const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  ...props
}: InputProps) => (
  <StyledInput
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);
