import EnumActionTypes from "./enumActionTypes";
import { ActionType } from "../types";

export const actionGetLaunchesStart = (): ActionType => ({
  type: "",
});

export const actionGetLaunchesSuccess = (
  arrLaunches: Record<string, any>[]
): ActionType => ({
  type: "",
});

export const actionGetLaunchesFail = (strErrorMessage: string): ActionType => ({
  type: "",
});
