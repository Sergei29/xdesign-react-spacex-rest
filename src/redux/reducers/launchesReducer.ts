import EnumActionTypes from "../actions/enumActionTypes";
import { LaunchesStateType, LaunchesReducerType } from "../types";

export const initialLaunchesState: Readonly<LaunchesStateType> = {
  bLoading: false,
  nstrError: null,
  arrLaunches: [],
};

/**
 * @description store reducer for lauches
 * @param {Object} objState launches state
 * @param {Object} objAction action fired
 * @returns {Object} updated launches state
 */
const launchesReducer: LaunchesReducerType = (objState, objAction) => {
  switch (objAction.type) {
    default:
      return objState;
  }
};

export default launchesReducer;
