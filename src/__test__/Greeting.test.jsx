import React from "react";
import { shallow } from "enzyme";
import Greeting from "./../Greeting.jsx";
describe("Greeting", () => {
  it(`should display user greeting if user logged in`, () => {
    const component = shallow(<Greeting isLoggedIn />);
    expect(component.find("UserGreeting").exists()).toBeTruthy();
  });
  it(`should display guest greeting if use logged out`, () => {
    const component = shallow(<Greeting />);
    expect(component.find("GuestGreeting").exists()).toBeTruthy();
  });
});
