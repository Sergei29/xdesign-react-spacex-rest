import { ThunkActionGeneratorType } from "../../redux/types";

export type HookReturnType = {
  bDescending: boolean;
  bLoading: boolean;
  arrLaunches: Record<string, any>[];
  arrYears: number[];
  nstrError: string | null;
  nIntYearFilterBy: number | null;
  funcApplyFilterByYear: (nIntYear: number | null) => void;
  funcRefetchLaunchesList: () => ThunkActionGeneratorType;
  funcToggleSortDirection: () => void;
};
