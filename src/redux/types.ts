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
