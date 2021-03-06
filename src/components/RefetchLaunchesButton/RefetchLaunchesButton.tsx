import React from "react";
import useFetchLaunches from "../../hooks/useFetchLaunches";
// style:
import { RefetchLaunchesButtonContainer } from "./style";

/**
 * @description presentational component
 * @returns {JSX} component markup, refetch lauches list button
 */
const RefetchLaunchesButton = () => {
  const { funcRefetchLaunchesList } = useFetchLaunches();
  return (
    <RefetchLaunchesButtonContainer onClick={funcRefetchLaunchesList}>
      Reload data
    </RefetchLaunchesButtonContainer>
  );
};

export default RefetchLaunchesButton;
