import React, { memo } from "react";
// style:
import { SpacexImageContainer } from "./style";

/**
 * @description Spacex hero image
 * @returns {JSX} component markup
 */
const SpacexImage: React.FC = () => {
  return <SpacexImageContainer>Spacex image</SpacexImageContainer>;
};

export default memo(SpacexImage);
