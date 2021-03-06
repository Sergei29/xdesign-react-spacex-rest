import styled from "styled-components";

export const SpacexImageContainer = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.mobileSm}) {
    display: none;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: block;
    width: 50%;
    padding-top: 70px;
  }
`;

export const PictureContainer = styled.picture`
  & > img {
    width: 95%;
  }
`;
