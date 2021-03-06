import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import SpacexImage from "./SpacexImage";

describe("SpacexImage", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<SpacexImage />);
  });

  it("should render", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
