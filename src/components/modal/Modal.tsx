import React from "react";
import {
  CardMedia,
  CardContent,
  Dialog,
  DialogTitle,
} from "@mui/material";
import { StyledCard } from "./styles";
import { Text } from "../text/Text";

interface IMovie {
  coverImage: string,
  description: string,
  director: string,
  id: string,
  title: string,
  year: number
};

interface ModalProps {
  open: boolean,
  onClose: (e: any) => void,
  movieSelected: IMovie,
};

export const Modal = ({ open, onClose, movieSelected }: ModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={() => onClose(false)}
    >
      <DialogTitle><Text label="About the movie" fontSize="small" /></DialogTitle>
      <StyledCard>
        <CardMedia
          component="img"
          image={movieSelected?.coverImage}
          alt={movieSelected?.id}
        />
      </StyledCard>
      <CardContent>
        <Text label={`${movieSelected?.title}, ${movieSelected?.year}`} fontSize="large" color="mineShaft" />
        <Text label={movieSelected?.description} fontSize="small" color="mineShaft" />
        <Text label={`Directed by ${movieSelected?.director}`} fontSize="medium" color="mineShaft" />
      </CardContent>
    </Dialog>
  )
};