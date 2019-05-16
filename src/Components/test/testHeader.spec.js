import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json"; 
import Header from "../Header";

describe("Header component", () => {

  // 1- check. content should be - TIC TAC TOE
  // 2- snapshot

  const myComponent = shallow(<Header />);

  it("check. content should be - TIC TAC TOE", () => {
    expect(myComponent.text()).toEqual("TIC TAC TOE");
  });

  it('Header snapshot', ()=>{
    expect(shallowToJson(myComponent)).toMatchSnapshot()
  })
 
});
