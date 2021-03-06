import EnumActionTypes from "../actions/enumActionTypes";
import { LaunchesStateType, LaunchesReducerType } from "../types";
import funcGetYears from "../../utils/funcGetYears/funcGetYears";

const {
  FETCH_LAUNCH_LIST_START,
  FETCH_LAUNCH_LIST_SUCCESS,
  FETCH_LAUNCH_LIST_ERROR,
} = EnumActionTypes;

export const initialLaunchesState: Readonly<LaunchesStateType> = {
  bLoading: false,
  nstrError: null,
  arrLaunches: [],
  arrYears: [],
};

/**
 * @description store reducer for lauches
 * @param {Object} objState launches state
 * @param {Object} objAction action fired
 * @returns {Object} updated launches state
 */
const launchesReducer: LaunchesReducerType = (
  objState = initialLaunchesState,
  objAction
) => {
  switch (objAction.type) {
    case FETCH_LAUNCH_LIST_START:
      return {
        ...objState,
        bLoading: true,
      };
    case FETCH_LAUNCH_LIST_SUCCESS:
      return {
        ...objState,
        bLoading: false,
        nstrError: null,
        arrLaunches: objAction.payload as Record<string, any>[],
        arrYears: funcGetYears(objAction.payload as Record<string, any>[]),
      };
    case FETCH_LAUNCH_LIST_ERROR:
      return {
        ...objState,
        bLoading: false,
        nstrError: objAction.payload as string,
      };
    default:
      return objState;
  }
};

export default launchesReducer;
