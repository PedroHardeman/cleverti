import React from "react";
import logo from "../../assets/cleverti-logo.png";
import { Input } from "../input/Input";
import { Select } from "../select/Select";
import { StyledDiv, StyledLogo, StyledContainer } from "./styles";

interface ISearch {
  searchValue: string,
  handleSearch: (value: string) => void;
  handleCategory: (value: string) => void;
}

export const Header = ({ searchValue, handleSearch, handleCategory }: ISearch) => {
  return (
    <StyledDiv>
      <StyledLogo src={logo} alt="header-logo" />
      <StyledContainer>
        <Input
          type="text"
          name="search"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Select
          name="select"
          value="title"
          onChange={(e) => handleCategory(e.target.value)}
        />
      </StyledContainer>
    </StyledDiv>
  )
};
