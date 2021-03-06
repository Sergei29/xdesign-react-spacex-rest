import axios from "axios";
import EnumActionTypes from "./enumActionTypes";
import { ActionType, ThunkActionGeneratorType } from "../types";
import { SPACEX_API_LAUNCHES_LIST } from "../../constants/apiEndpoints";

const {
  FETCH_LAUNCH_LIST_START,
  FETCH_LAUNCH_LIST_SUCCESS,
  FETCH_LAUNCH_LIST_ERROR,
} = EnumActionTypes;

/**
 * @description action creator function, on start
 * @returns {Object} action object
 */
export const actionGetLaunchesStart = (): ActionType => ({
  type: FETCH_LAUNCH_LIST_START,
});

/**
 * @description action creator function, on success
 * @returns {Object} action object
 */
export const actionGetLaunchesSuccess = (
  arrLaunches: Record<string, any>[]
): ActionType => ({
  type: FETCH_LAUNCH_LIST_SUCCESS,
  payload: arrLaunches,
});

/**
 * @description action creator function, on error
 * @returns {Object} action object
 */
export const actionGetLaunchesFail = (strErrorMessage: string): ActionType => ({
  type: FETCH_LAUNCH_LIST_ERROR,
  payload: strErrorMessage,
});

/**
 * @description thunked action function, makes API call then dispatches actons based on outcome.
 * @returns {Function} Function that has curried parameters `dispatch` and `getState`
 */
export const actionFetchLaunchesList = (): ThunkActionGeneratorType => async (
  dispatch
) => {
  dispatch(actionGetLaunchesStart());
  try {
    const { data: arrLaunchesList } = await axios.get(SPACEX_API_LAUNCHES_LIST);

    dispatch(actionGetLaunchesSuccess(arrLaunchesList));
  } catch (objError) {
    const strErrMessage = objError.message
      ? objError.message
      : "Failed to fetch launches list";

    dispatch(actionGetLaunchesFail(strErrMessage));
  }
};
