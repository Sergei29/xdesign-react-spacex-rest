import styled from "styled-components";

export const SelectByYearContainer = styled.select`
  width: 144px;
  height: 43px;
  background-color: ${(props) => props.theme.palette.primaryBlue};
  color: ${(props) => props.theme.font.light};
  border: none;
  font-size: 14px;
  font-weight: 400;
  font-family: ${(props) => props.theme.fontFamily};
  &:active,
  &:focus {
    outline: none;
  }
`;
