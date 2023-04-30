import React from "react";
import { shallow } from "enzyme";
import Logout from "./../Logout.jsx";
describe("Logout", () => {
  it(`should logged out user if button click`, () => {
    const mockLogout = jest.fn();
    const component = shallow(<Logout onLogout={mockLogout} />);
    component.find(".logout.btn").simulate("click");
    expect(mockLogout).toBeCalled();
  });
});
