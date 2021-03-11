import React from "react";
import axios from "axios";
import { renderHook } from "@testing-library/react-hooks";
import { Provider } from "react-redux";
import objApplicationStore from "../../redux/store/store";
import useFetchLaunches from "./useFetchLaunches";
import {
  MOCK_AXIOS_ERROR_MSG,
  arrMockLaunches,
  arrMockYears,
} from "./testData";

type Props = {
  children: React.ReactNode;
};

describe("custom hook useFetchLaunches", () => {
  jest.setTimeout(20000);
  const wrapper = ({ children }: Props) => (
    <Provider store={objApplicationStore}>{children}</Provider>
  );

  it("should start fetch by set loading to true on mount", () => {
    const { result } = renderHook(() => useFetchLaunches(), {
      wrapper,
    });
    expect(result.current.bLoading).toEqual(true);
  });

  it("should fetch data then set loading to false", async () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce({ data: arrMockLaunches });
    const { result, waitForNextUpdate } = renderHook(() => useFetchLaunches(), {
      wrapper,
    });
    await waitForNextUpdate();

    expect(result.current.bLoading).toEqual(false);
    expect(result.current.nstrError).toEqual(null);
    expect(result.current.arrYears).toEqual(arrMockYears);
    expect(result.current.arrLaunches.length).toBeGreaterThan(0);
  });

  it("should handle the error with setting up the error message", async () => {
    jest
      .spyOn(axios, "get")
      .mockRejectedValueOnce(new Error(MOCK_AXIOS_ERROR_MSG));
    const { result, waitForNextUpdate } = renderHook(() => useFetchLaunches(), {
      wrapper,
    });
    await waitForNextUpdate();

    expect(result.current.bLoading).toEqual(false);
    expect(result.current.nstrError).toEqual(MOCK_AXIOS_ERROR_MSG);
  });
});
