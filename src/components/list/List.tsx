import React, { useState, useEffect } from "react";
import {
  CardMedia,
  Pagination,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Modal } from "../modal/Modal";
import { Text } from "../text/Text";

import { StyledGrid, StyledGridWrapper, StyledCard, StyledCardContent, StyledEmpty } from "./styles";

interface IResponse {
  coverImage: string,
  description: string,
  director: string,
  id: string,
  title: string,
  year: number
};

interface ListProps {
  wholeList: Array<IResponse>,
  searchValue: string,
  categoryValue: string,
}

export const List = ({ wholeList, searchValue, categoryValue }: ListProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [movieSelected, setMovieSelected] = useState<any>();
  const [showingList, setShowingList] = useState<Array<IResponse>>([]);
  const [pageController, setPageController] = useState<number>(wholeList.length / 10);

  useEffect(() => {
    setShowingList(wholeList.slice(0, 10));
  }, [wholeList]);

  useEffect(() => {
    if (searchValue) handleSearch(wholeList, searchValue, categoryValue);
    else setShowingList(wholeList.slice(0, 10));
  }, [wholeList, searchValue, categoryValue]);

  const handleSearch = (list: Array<IResponse>, search: string, category: string) => {
    if (category === "year")
      setShowingList(list
        .filter(movie => movie.year === parseInt(search))
        .slice(0, 10)
      );
    else
      setShowingList(list
        // @ts-ignore: Unreachable code error
        .filter(movie => movie[category].toUpperCase().includes(search.toUpperCase()))
        .slice(0, 10)
      );

    handlePagination(undefined as unknown as React.ChangeEvent<unknown>, 1);
  };

  const handlePagination = (event: React.ChangeEvent<unknown>, value: number) => {
    if (categoryValue === "year") {
      setPageController(wholeList
        // @ts-ignore: Unreachable code error
        .filter(movie => movie.year === parseInt(searchValue))
        .length
      );

      setShowingList(wholeList
        // @ts-ignore: Unreachable code error
        .filter(movie => movie.year === parseInt(searchValue))
        .slice(((value - 1) * 10), (value * 10))
      );
    } else {
      setPageController(wholeList
        // @ts-ignore: Unreachable code error
        .filter(movie => movie[categoryValue].toUpperCase().includes(searchValue.toUpperCase()))
        .length
      );

      setShowingList(wholeList
        // @ts-ignore: Unreachable code error
        .filter(movie => movie[categoryValue].toUpperCase().includes(searchValue.toUpperCase()))
        .slice(((value - 1) * 10), (value * 10))
      );
    }
  };

  const handleClickOpen = (movie: IResponse) => {
    setMovieSelected(movie);
    setOpen(true);
  };

  return (
    showingList.length > 0
      ? <>
        <StyledGrid container>
          {showingList.map(movie => (
            <StyledGridWrapper item xs={2} onClick={() => handleClickOpen(movie)}>
              <StyledCard>
                <CardMedia
                  component="img"
                  image={movie.coverImage}
                  alt={movie.id}
                />
              </StyledCard>
              <StyledCardContent>
                {movie.title}
                <ExpandMoreIcon onClick={() => handleClickOpen(movie)} />
              </StyledCardContent>
            </StyledGridWrapper>
          ))}
        </StyledGrid>
        <Pagination
          count={(pageController / 10) > 0
            ? Math.ceil(pageController / 10)
            : 1
          }
          onChange={handlePagination}
        />

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          movieSelected={movieSelected}
        />
      </>
      : <StyledEmpty>
        <Text color="havelockBlue" label="No movies found!" fontSize="large" />
      </StyledEmpty>
  )
};