import styled from "styled-components";
import { Grid, Card, CardContent } from "@mui/material";

export const StyledGrid = styled(Grid)`
  justify-content: center;
`;

export const StyledGridWrapper = styled(Grid)`
  background-color: white;
  transition: transform .4s;
  box-shadow: 0px 10px 10px -3px rgba(0,0,0,0.45);
  margin: 0 25px 50px 25px!important;
  border-radius: 10px;
  cursor: pointer;

  &:focus {
    transform: scale(1.2);
  }
  &:hover {
    transform: scale(1.2);
  }
`;

export const StyledCard = styled(Card)`
  border-radius: 0!important;
`;

export const StyledCardContent = styled(CardContent)`
  display: flex;
  justify-content: space-between;
`;

export const StyledEmpty = styled.div`
  display: flex;
  justify-content: space-between;
`;