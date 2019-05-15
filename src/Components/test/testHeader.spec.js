import React from "react";
import { shallow } from "enzyme";
import Header from "../Header";

describe("Header component", () => {
  // 1- check type of component content

  it("Content should be - TIC TAC TOE", () => {
    const headerComponent = shallow(<Header />);
    expect(headerComponent.text()).toEqual("TIC TAC TOE");
  });
});
