import React from "react";
import { shallow } from "enzyme";
import GuestGreeting from "./../GuestGreeting.jsx";
describe("GuestGreeting", () => {
  it(`should display guest greeting`, () => {
    const component = shallow(<GuestGreeting />);
    expect(component).toMatchSnapshot();
  });
});
