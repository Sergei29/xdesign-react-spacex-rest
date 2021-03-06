import React from "react";
import useFetchLaunches from "../../hooks/useFetchLaunches";
// style:
import { LaunchesListContainer, ControlsContainer } from "./style";

/**
 * @description Spacex launches list
 * @returns {JSX} component markup
 */
const LaunchesList: React.FC = () => {
  const { bLoading, arrLaunches, arrYears, nstrError } = useFetchLaunches();

  /**
   * @description generates launches items or fetching status
   * @returns {JSX} markup
   */
  const renderLaunchesList = () => {
    if (bLoading) return <h4>Loading</h4>;
    if (nstrError) return <h4>Error: {nstrError}</h4>;
    return arrLaunches.map((objLaunch) => (
      <p key={objLaunch["mission_name"] + objLaunch["launch_date_utc"]}>
        {objLaunch["mission_name"]}
      </p>
    ));
  };

  return (
    <LaunchesListContainer>
      <ControlsContainer>
        {" "}
        <span>filter by year</span>
        <span>sort asc/desc</span>{" "}
      </ControlsContainer>
      {renderLaunchesList()}
    </LaunchesListContainer>
  );
};

export default LaunchesList;
