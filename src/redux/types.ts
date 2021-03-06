import { ThunkAction } from "redux-thunk";
import { Action, Dispatch } from "redux";

export type LaunchesStateType = {
  bLoading: boolean;
  nstrError: null | string;
  arrLaunches: Record<string, any>[];
  arrYears: number[];
};

export type AppStateType = {
  objLaunches: LaunchesStateType;
};

export type ActionType = {
  type: string;
  payload?: string | Record<string, any>[];
};

export type LaunchesReducerType = (
  objState: LaunchesStateType,
  objAction: ActionType
) => LaunchesStateType;

export type ThunkActionGeneratorType<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStateType,
  unknown,
  Action<string>
>;

export type DispatchType = Dispatch<Action<string>>;
