import React from "react";
import { shallow, mount, render } from "enzyme";
import App from "../../client/src/components/App.jsx";

describe("first test", function() {
  it("should render a ", function() {
    const wrapper = shallow(<App />);
    console.log(
      wrapper
        .find("#masterContainer")
        .children()
        .debug()
    );
    expect(wrapper.find("#masterContainer").children()).toHaveLength(2);
  });
});
