import React from "react";
import logo from "../../assets/cleverti-logo.png";

import "./header.css";

interface ISearch {
  searchValue: string,
  handleSearch: (value: string) => void;
  handleCategory: (value: string) => void;
}

export const Header = ({ searchValue, handleSearch, handleCategory }: ISearch) => {
  return (
    <div className="wrapper">
      <img src={logo} alt="header-logo" className="logo" />
      <div className="search-container">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="search"
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <select className="select" onChange={(e) => handleCategory(e.target.value)}>
          <option value="title">title</option>
          <option value="director">director</option>
          <option value="year">year</option>
        </select>
      </div>
    </div>
  )
};
