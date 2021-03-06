import React, { memo } from "react";
import LaunchImageLg from "../../assets/img/launch-home@3x.png";
import LaunchImageMd from "../../assets/img/launch-home@2x.png";
import LaunchImageSm from "../../assets/img/launch-home.png";
// style:
import { SpacexImageContainer, PictureContainer } from "./style";

/**
 * @description Spacex hero image
 * @returns {JSX} component markup
 */
const SpacexImage: React.FC = () => {
  return (
    <SpacexImageContainer>
      <PictureContainer>
        <source media="(min-width:1440px)" srcSet={LaunchImageLg} />
        <source media="(min-width:1024px)" srcSet={LaunchImageMd} />
        <source media="(min-width:768px)" srcSet={LaunchImageSm} />
        <img src={LaunchImageSm} alt="spacex launch" />
      </PictureContainer>
    </SpacexImageContainer>
  );
};

export default memo(SpacexImage);
