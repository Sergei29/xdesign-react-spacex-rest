import React from "react";
import useFetchLaunches from "../../hooks/useFetchLaunches";
// components:
import FilterByYearButton from "../FilterByYearButton";
import SortLaunchesButton from "../SortLaunchesButton";
import LaunchItem from "../LaunchItem";
// style:
import { LaunchesListContainer, ControlsContainer } from "./style";

/**
 * @description Spacex launches list
 * @returns {JSX} component markup
 */
const LaunchesList: React.FC = () => {
  const {
    bDescending,
    bLoading,
    arrLaunches,
    arrYears,
    nstrError,
    nIntYearFilterBy,
    funcApplyFilterByYear,
    funcToggleSortDirection,
  } = useFetchLaunches();

  /**
   * @description generates launches items or fetching status
   * @returns {JSX} markup
   */
  const renderLaunchesList = () => {
    if (bLoading) return <h4>Loading...</h4>;
    if (nstrError) return <h4>Error: {nstrError}</h4>;
    return arrLaunches.map((objLaunch, intIndex) => (
      <LaunchItem
        key={objLaunch["mission_name"] + objLaunch["launch_date_utc"]}
        intIndex={intIndex + 1}
        strMissionName={objLaunch["mission_name"]}
        strRocketName={objLaunch["rocket"]["rocket_name"]}
        strLaunchDateUtc={objLaunch["launch_date_utc"]}
      />
    ));
  };

  return (
    <LaunchesListContainer>
      <ControlsContainer>
        <FilterByYearButton
          arrYears={arrYears}
          nIntSelectedYear={nIntYearFilterBy}
          funcHandleSelect={funcApplyFilterByYear}
        />
        <SortLaunchesButton
          bDisabled={nIntYearFilterBy !== null}
          bDescending={bDescending}
          funcHandleClick={funcToggleSortDirection}
        />
      </ControlsContainer>
      {renderLaunchesList()}
    </LaunchesListContainer>
  );
};

export default LaunchesList;
