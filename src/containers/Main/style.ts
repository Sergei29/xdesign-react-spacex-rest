import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  padding-top: 54px;
  padding-bottom: 2.5rem;
  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    width: 95%;
  }
`;
