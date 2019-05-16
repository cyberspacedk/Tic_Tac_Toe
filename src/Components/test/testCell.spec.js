import React from "react";
import { shallow } from "enzyme";
import Cell from "../Cell";
import { shallowToJson } from "enzyme-to-json";

describe("Cell container", () => {
	
  // 1- snapshot
  // 2- check. value should equals prop value
  // 3- simulate. click on cell 

  const mockClick = jest.fn();
  
  const props = {
    value: "X",
    onClick: mockClick,
    name: "cell"
  };

  const myComponent = shallow(<Cell {...props} />);

  it("cell snapshot", () => {
    expect(shallowToJson(myComponent)).toMatchSnapshot();
  });

  it("Check. value should equals prop value", () => { 
    expect(myComponent.text()).toEqual("X");
  });

  it("Simulate. click on cell", () => { 
    myComponent.find('[name="cell"]').simulate("click");
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
