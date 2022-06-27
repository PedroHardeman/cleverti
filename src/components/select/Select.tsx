import React from "react";
import "./select.css";

interface SelectProps {
  name: string;
  value: string;
  onChange?: (e: any) => void;
}

export const Select = ({
  name,
  value,
  onChange,
  ...props
}: SelectProps) => (
  <select className="select" onChange={onChange}>
    <option value="title">title</option>
    <option value="director">director</option>
    <option value="year">year</option>
  </select>
);
