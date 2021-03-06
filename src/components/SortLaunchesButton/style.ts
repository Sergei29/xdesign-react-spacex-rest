import styled from "styled-components";

export const SortButtonContainer = styled.button`
  width: 144px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  background-color: ${(props) => props.theme.palette.primaryBlue};
  color: ${(props) => props.theme.font.light};
  border: none;
  font-size: 14px;
  font-weight: 400;
  font-family: ${(props) => props.theme.fontFamily};
  &:disabled {
    opacity: 0.7;
  }
  &:active,
  &:focus {
    outline: none;
  }
`;
