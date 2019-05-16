import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Area from "../Area";

describe("container for cells", () => {
  // 1- snapshot
  // 2- check. count of cells
  // 3- check. is cell have prop value
  // 4- check. is cell have prop onClick
  

  const props = {
    cells: Array(9).fill("")
  };

  const myComponent = shallow(<Area {...props} />);

  it("Area snapshot", () => {
    expect(shallowToJson(myComponent)).toMatchSnapshot();
  });

  it("Component should draw 9 <Cell />", () => { 
    expect(myComponent.find("Cell")).toHaveLength(9);
  });

  it("Check. Is cell have prop value", () => {
    expect(myComponent.find('Cell').first().prop('value')).toEqual('')
  });

  it("Check. Is cell have prop onClick", () => {
    expect(myComponent.find('Cell').first().prop('onClick')).toBeTruthy()
  });
});
