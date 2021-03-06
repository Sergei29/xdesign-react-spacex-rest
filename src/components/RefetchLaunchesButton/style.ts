import styled from "styled-components";

export const RefetchLaunchesButtonContainer = styled.button`
  height: 43px;
  width: 134px;
  background-color: ${(props) => props.theme.palette.primaryBlue};
  color: ${(props) => props.theme.font.light};
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  border-radius: 0 21.5px 21.5px 0;
  border: none;
  font-size: 14px;
  font-weight: 400;
  font-family: ${(props) => props.theme.fontFamily};
  &:active,
  &:focus {
    outline: none;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    border-radius: 21.5px 0 0 21.5px;
  }
`;
