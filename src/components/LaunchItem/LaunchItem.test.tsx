import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import LaunchItem from "./LaunchItem";

describe("LaunchItem", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    const objMockProps = {
      intIndex: 2,
      strMissionName: "DemoSat",
      strRocketName: "Falcon 1",
      strLaunchDateUtc: "2007-03-21T01:10:00.000Z",
    };
    wrapper = shallow(<LaunchItem {...objMockProps} />);
  });

  it("should render", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
