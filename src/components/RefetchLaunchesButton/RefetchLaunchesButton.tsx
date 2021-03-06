import React from "react";
// style:
import { RefetchLaunchesButtonContainer } from "./style";

/**
 * @description presentational component
 * @returns {JSX} component markup, refetch lauches list button
 */
const RefetchLaunchesButton = () => {
  return (
    <RefetchLaunchesButtonContainer>Reload data</RefetchLaunchesButtonContainer>
  );
};

export default RefetchLaunchesButton;
