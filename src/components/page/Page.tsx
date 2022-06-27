import React, { useEffect, useState } from "react";
import { Header } from "../header/Header";
import { List } from "../list/List";
import { CircularProgress } from "@mui/material";
import { StyledDiv, StyledContainer } from "./styles";

import { getMovies } from "../../services/pageServices";

interface IResponse {
  coverImage: string,
  description: string,
  director: string,
  id: string,
  title: string,
  year: number
};

function Page() {
  const [loading, setLoading] = useState<boolean>(true);
  const [wholeList, setWholeList] = useState<Array<IResponse>>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [categoryValue, setCategoryValue] = useState<string>("title");

  useEffect(() => {
    getMovies()
      .then((response: any) => { setWholeList(response.data) })
      .finally(() => { setLoading(false) });
  }, []);

  const handleChange = (value: string) => {
    setSearchValue(value);
    setLoading(false);
  };

  const handleCategory = (value: string) => {
    setSearchValue("");
    setCategoryValue(value);
    setLoading(false);
  };

  return (
    <StyledDiv>
      <Header
        searchValue={searchValue}
        handleSearch={(value) => {
          setLoading(true);
          handleChange(value);
        }}
        handleCategory={(value) => {
          setLoading(true);
          handleCategory(value);
        }}
      />

      <StyledContainer>
        {loading
          ? <CircularProgress />
          : <List
            wholeList={wholeList}
            searchValue={searchValue}
            categoryValue={categoryValue}
          />
        }
      </StyledContainer>

    </StyledDiv>
  );
}

export default Page;
