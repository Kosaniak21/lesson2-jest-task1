import React from "react";
import { shallow } from "enzyme";
import Auth from "./../Auth.jsx";
describe("Auth", () => {
  it(`should display Login button if user logged out`, () => {
    const component = shallow(<Auth />);
    expect(component.find("Login").exists()).toBeTruthy();
  });
  it(`should display Logout button if user logged in`, () => {
    const component = shallow(<Auth />);
    component.find("Login").prop("onLogin")();
    expect(component.find("Logout").exists()).toBeTruthy();
  });
});
