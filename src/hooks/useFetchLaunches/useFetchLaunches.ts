import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchLaunchesList } from "../../redux/actions/actionsGenerators";
import { AppStateType, LaunchesStateType } from "../../redux/types";

/**
 * @description custom hook, get launches list
 * @returns {Object} fetch status, refetch function and launches data
 */
const useFetchLaunches = () => {
  const [bDescending, setbDescending] = useState<boolean>(false);
  const [nIntYearFilterBy, setnIntYearFilterBy] = useState<number | null>(null);

  const dispatch = useDispatch();

  const { bLoading, arrLaunches, arrYears, nstrError } = useSelector<
    AppStateType,
    LaunchesStateType
  >((objAppState) => objAppState.objLaunches);

  /**
   * @description refetch launches
   * @returns {Function} thunked action that makes Spacex API call
   */
  const funcRefetchLaunchesList = useCallback(
    () => dispatch(actionFetchLaunchesList()),
    [dispatch]
  );

  /**
   * @description change sort direction
   * @returns {undefined} sets state
   */
  const funcToggleSortDirection = useCallback(
    () => setbDescending((bPrevDescending) => !bPrevDescending),
    []
  );

  /**
   * @description apply a year to filter by
   * @returns {undefined} sets state
   */
  const funcApplyFilterByYear = useCallback(
    (nIntYear: number | null) => setnIntYearFilterBy(nIntYear),
    []
  );

  let arrLaunchesResult = arrLaunches.sort((objLaunch, objLaunchNext) => {
    const intYear = parseInt(objLaunch["launch_year"]);
    const intYearNext = parseInt(objLaunchNext["launch_year"]);

    return bDescending ? intYearNext - intYear : intYear - intYearNext;
  });

  if (nIntYearFilterBy) {
    arrLaunchesResult = arrLaunchesResult.filter(
      (objLaunch) => parseInt(objLaunch["launch_year"]) === nIntYearFilterBy
    );
  }

  useEffect(() => {
    dispatch(actionFetchLaunchesList());
  }, [dispatch]);

  return {
    bDescending,
    bLoading,
    arrLaunches: arrLaunchesResult,
    arrYears,
    nstrError,
    nIntYearFilterBy,
    funcApplyFilterByYear,
    funcRefetchLaunchesList,
    funcToggleSortDirection,
  };
};

export default useFetchLaunches;
