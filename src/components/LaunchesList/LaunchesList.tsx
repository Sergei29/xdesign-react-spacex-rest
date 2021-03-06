import React from "react";
import useFetchLaunches from "../../hooks/useFetchLaunches";
// components:
import FilterByYearButton from "../FilterByYearButton";
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
    if (bLoading) return <h4>Loading</h4>;
    if (nstrError) return <h4>Error: {nstrError}</h4>;
    return arrLaunches.map((objLaunch) => (
      <div key={objLaunch["mission_name"] + objLaunch["launch_date_utc"]}>
        <p>{objLaunch["mission_name"]}</p>
        <p>{objLaunch["launch_year"]}</p>
      </div>
    ));
  };

  return (
    <LaunchesListContainer>
      <ControlsContainer>
        {" "}
        <FilterByYearButton
          arrYears={arrYears}
          nIntSelectedYear={nIntYearFilterBy}
          funcHandleSelect={funcApplyFilterByYear}
        />
        <button
          onClick={funcToggleSortDirection}
          disabled={nIntYearFilterBy !== null}
        >
          sort {bDescending ? "Asc" : "Desc"}
        </button>{" "}
      </ControlsContainer>
      {renderLaunchesList()}
    </LaunchesListContainer>
  );
};

export default LaunchesList;
