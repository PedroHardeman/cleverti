import styled from "styled-components";

export const StyledInput = styled.input`
  margin: 0 20px;
  padding: 10px;
  width: 130px;
  border: none;
  border-bottom: 1px solid #F05223;
  border-radius: 5px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;

  &:focus {
    width: 50%;
    outline-width: 0;
  }
  &:focus-visible {
    outline-width: 0;
    border: none;
    border-bottom: 1px solid #F05223;
  }
`;