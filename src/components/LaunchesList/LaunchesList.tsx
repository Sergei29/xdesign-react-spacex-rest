import React from "react";
import useFetchLaunches from "../../hooks/useFetchLaunches";
// style:
import { LaunchesListContainer, ControlsContainer } from "./style";

const LaunchesList = () => {
  const { bLoading, arrLaunches, arrYears, nstrError } = useFetchLaunches();

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
