import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchLaunchesList } from "../../redux/actions/actionsGenerators";
import { AppStateType, LaunchesStateType } from "../../redux/types";

/**
 * @description custom hook, get launches list
 * @returns {Object} fetch status, refetch function and launches data
 */
const useFetchLaunches = () => {
  const dispatch = useDispatch();

  const funcRefetchLaunchesList = () => dispatch(actionFetchLaunchesList());

  useEffect(() => {
    dispatch(actionFetchLaunchesList());
  }, [dispatch]);

  const { bLoading, arrLaunches, arrYears, nstrError } = useSelector<
    AppStateType,
    LaunchesStateType
  >((objAppState) => objAppState.objLaunches);

  return {
    bLoading,
    arrLaunches,
    arrYears,
    nstrError,
    funcRefetchLaunchesList,
  };
};

export default useFetchLaunches;
