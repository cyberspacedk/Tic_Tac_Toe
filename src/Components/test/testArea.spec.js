import React from "react";
import { shallow } from "enzyme";
import {shallowToJson} from 'enzyme-to-json';


import Area from "../Area";
const console = require("console");

describe("container for cells", () => {
  const props = {
    cells: Array(9).fill("")
  };

  it("component should draw 9 <Cell />", () => { 
    const myComponent = shallow(<Area {...props} />); 
    expect(myComponent.find("Cell")).toHaveLength(9);
  });

  it("snapshot area of cells", () => { 
    const myComponent = shallow(<Area {...props} />);  
    expect(shallowToJson(myComponent)).toMatchSnapshot();
  });

});
