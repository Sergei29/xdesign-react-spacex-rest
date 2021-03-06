import styled from "styled-components";

export const LaunchesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 50%;
  & > div {
    margin-bottom: 8px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.mobileSm}) {
    width: 100%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 50%;
  }
`;

export const Loader = styled.h4`
  color: ${(props) => props.theme.palette.primaryBlue};
  text-align: center;
`;

export const Error = styled.h4`
  color: ${(props) => props.theme.palette.primaryBlue};
  text-align: center;
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 8px;
`;
