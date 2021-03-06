import launchesReducer, { initialLaunchesState } from "./launchesReducer";
import EnumActionTypes from "../../actions/enumActionTypes";
import {
  strMockErrorMessage,
  arrLaunchesPayload,
  arrYearsPayload,
} from "./testData";

const {
  FETCH_LAUNCH_LIST_ERROR,
  FETCH_LAUNCH_LIST_START,
  FETCH_LAUNCH_LIST_SUCCESS,
} = EnumActionTypes;

describe("launchesReducer", () => {
  it("should return initial state as default case", () => {
    const expectedState = initialLaunchesState;
    const receivedState = launchesReducer(undefined, { type: "UNKNOWN" });

    expect(receivedState).toEqual(expectedState);
  });

  it(`should handle ${FETCH_LAUNCH_LIST_START} event`, () => {
    const prevState = initialLaunchesState;
    const expectedState = { ...prevState, bLoading: true };
    const receivedState = launchesReducer(prevState, {
      type: FETCH_LAUNCH_LIST_START,
    });

    expect(receivedState).toEqual(expectedState);
  });

  it(`should handle ${FETCH_LAUNCH_LIST_ERROR} event`, () => {
    const prevState = { ...initialLaunchesState, bLoading: true };
    const expectedState = {
      ...prevState,
      bLoading: false,
      nstrError: strMockErrorMessage,
    };
    const receivedState = launchesReducer(prevState, {
      type: FETCH_LAUNCH_LIST_ERROR,
      payload: strMockErrorMessage,
    });

    expect(receivedState).toEqual(expectedState);
  });

  it(`should handle ${FETCH_LAUNCH_LIST_SUCCESS} event`, () => {
    const prevState = { ...initialLaunchesState, bLoading: true };
    const expectedState = {
      ...prevState,
      bLoading: false,
      arrLaunches: arrLaunchesPayload,
      arrYears: arrYearsPayload,
    };
    const receivedState = launchesReducer(prevState, {
      type: FETCH_LAUNCH_LIST_SUCCESS,
      payload: arrLaunchesPayload,
    });

    expect(receivedState).toEqual(expectedState);
  });
});
