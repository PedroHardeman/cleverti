import React, { useState, useEffect } from "react";
import {
  Card,
  Grid,
  CardMedia,
  CardContent,
  Pagination,
  Dialog,
  DialogTitle,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Text } from "../text/Text";

import "./list.css";

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

    handlePagination(undefined as unknown as React.ChangeEvent<unknown>, 1)
  };

  const handlePagination = (event: React.ChangeEvent<unknown>, value: number) => {
    if (categoryValue === "year") {
      setPageController(wholeList
        // @ts-ignore: Unreachable code error
        .filter(movie => movie.year === parseInt(searchValue))
        .length
      )

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
      )

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
        <Grid container className="grid-container">
          {showingList.map(movie => (
            <Grid item xs={2} className="grid-wrapper" onClick={() => handleClickOpen(movie)}>
              <Card className="card-wrapper">
                <CardMedia
                  component="img"
                  image={movie.coverImage}
                  alt={movie.id}
                />
              </Card>
              <CardContent className="card-content">
                {movie.title}
                <ExpandMoreIcon onClick={() => handleClickOpen(movie)} />
              </CardContent>
            </Grid>
          ))}
        </Grid>
        <Pagination
          count={(pageController / 10) > 0
            ? Math.ceil(pageController / 10)
            : 1
          }
          onChange={handlePagination}
        />


        <Dialog
          open={open}
          onClose={() => setOpen(false)}
        >
          <DialogTitle><Text label="About the movie" fontSize="small" /></DialogTitle>
          <Card className="card-wrapper">
            <CardMedia
              component="img"
              image={movieSelected?.coverImage}
              alt={movieSelected?.id}
            />
          </Card>
          <CardContent>
            <Text label={`${movieSelected?.title}, ${movieSelected?.year}`} fontSize="large" color="mineShaft" />
            <Text label={movieSelected?.description} fontSize="small" color="mineShaft" />
            <Text label={`Directed by ${movieSelected?.director}`} fontSize="medium" color="mineShaft" />
          </CardContent>
        </Dialog>
      </>
      : <div className="empty-container">
        <Text color="havelockBlue" label="No results found!" fontSize="large" />
      </div>
  )
};