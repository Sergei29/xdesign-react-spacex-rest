import React from "react";
import SpacexLogoImage from "../../assets/img/spacex-logo.png";
// style:
import { SpacexLogoContainer, ImageContainer, TextContainer } from "./style";

/**
 * @description presentational component
 * @returns {JSX} component markup, spacex logo
 */
const SpacexLogo: React.FC = () => {
  return (
    <SpacexLogoContainer>
      <ImageContainer>
        <img src={SpacexLogoImage} alt="spacex logo" />
      </ImageContainer>
      <TextContainer>
        <span>launches</span>
      </TextContainer>
    </SpacexLogoContainer>
  );
};

export default SpacexLogo;
