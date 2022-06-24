import React, { useEffect, useState } from "react";
import { Header } from "../header/Header";
import { List } from "../list/List";
import { CircularProgress } from "@mui/material";

import { getMovies } from "../../services/pageServices";
import "./page.css";

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
    <div className="App">
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

      <div className="App-Container">
        {loading
          ? <CircularProgress />
          : <List
            wholeList={wholeList}
            searchValue={searchValue}
            categoryValue={categoryValue}
          />
        }
      </div>

    </div>
  );
}

export default Page;
