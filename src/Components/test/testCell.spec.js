import React from "react";
import { shallow } from "enzyme";
import Cell from "../Cell";
import { shallowToJson } from "enzyme-to-json";

describe("Cell container", () => {
	
  // 1- snapshot
  // 2- check typeof value
  // 3- click on cell 

  const mockClick = jest.fn();
  const props = {
    value: "X",
    onClick: mockClick,
    name: "cell"
  };

  it("snapshot cell", () => {
    const myComponent = shallow(<Cell {...props} />);
    expect(shallowToJson(myComponent)).toMatchSnapshot();
  });

  it("value should be a string", () => {
    const myComponent = shallow(<Cell {...props} />);
    expect(myComponent.text()).toEqual("X");
  });

  it("click on cell", () => {
    const myComponent = shallow(<Cell {...props} />);
    myComponent.find('[name="cell"]').simulate("click");
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
