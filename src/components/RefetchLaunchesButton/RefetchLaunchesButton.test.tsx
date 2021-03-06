import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Provider } from "react-redux";
import objStore from "../../redux/store/store";
import RefetchLaunchesButton from "./RefetchLaunchesButton";

describe("RefetchLaunchesButton", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={objStore}>
        <RefetchLaunchesButton />
      </Provider>
    );
  });

  it("should render", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
