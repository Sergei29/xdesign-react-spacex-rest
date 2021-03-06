import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  @media (min-width: ${(props) => props.theme.breakpoints.mobileSm}) {
    flex-direction: column;
    row-gap: 8px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;
