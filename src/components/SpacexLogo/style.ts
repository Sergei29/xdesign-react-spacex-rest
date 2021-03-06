import styled from "styled-components";

export const SpacexLogoContainer = styled.div`
  display: flex;
`;
export const ImageContainer = styled.div`
  width: 178px;
  height: 22px;
  & > img {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  width: 115px;
  height: 22px;
  font-weight: 400;
  font-size: 20px;
  color: ${(props) => props.theme.font.main};
  text-transform: uppercase;
  & > span {
    position: relative;
    top: 4px;
    left: -15px;
  }
`;
