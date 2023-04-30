import React from "react";
import { shallow } from "enzyme";
import Login from "./../Login.jsx";
describe("Login", () => {
  it(`should login user if button click`, () => {
    const mockLogin = jest.fn();
    const component = shallow(<Login onLogin={mockLogin} />);
component.find(".login.btn").simulate("click");
    expect(mockLogin).toBeCalled();
  });
});
