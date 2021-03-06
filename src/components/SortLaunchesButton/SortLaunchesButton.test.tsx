import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import SortLaunchesButton from "./SortLaunchesButton";

describe("SortLaunchesButton", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    const objMockProps = {
      bDescending: true,
      bDisabled: false,
      funcHandleClick: jest.fn(),
    };
    wrapper = shallow(<SortLaunchesButton {...objMockProps} />);
  });

  it("should render", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
