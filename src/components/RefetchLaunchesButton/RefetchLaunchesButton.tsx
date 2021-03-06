import React from "react";
import useFetchLaunches from "../../hooks/useFetchLaunches";
import RefreshIcon from "../../assets/icon/refresh.png";
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
      <span>Reload data</span>
      <img src={RefreshIcon} alt="refresh icon" />
    </RefetchLaunchesButtonContainer>
  );
};

export default RefetchLaunchesButton;
