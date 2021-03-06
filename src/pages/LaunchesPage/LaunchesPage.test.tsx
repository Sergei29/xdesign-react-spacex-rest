import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import LaunchesPage from "./LaunchesPage";

describe("LaunchesPage", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<LaunchesPage />);
  });

  it("should render", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
