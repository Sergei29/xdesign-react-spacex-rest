import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import FilterByYearButton from "./FilterByYearButton";

describe("FilterByYearButton", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    const objMockProps = {
      arrYears: [2006, 2007, 2008, 2009],
      nIntSelectedYear: 2006,
      funcHandleSelect: jest.fn(),
    };
    wrapper = shallow(<FilterByYearButton {...objMockProps} />);
  });

  it("should render", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
