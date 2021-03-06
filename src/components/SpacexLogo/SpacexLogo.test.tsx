import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import SpacexLogo from "./SpacexLogo";

describe("SpacexImage", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<SpacexLogo />);
  });

  it("should render", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
