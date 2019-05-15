import React from "react";
import { shallow } from "enzyme";
import {shallowToJson} from 'enzyme-to-json'; 
import Area from "../Area"; 

describe("container for cells", () => {

// 1- snapshot
// 2- check count of cells

  const props = {
    cells: Array(9).fill("")
  };

  it("snapshot area of cells", () => { 
    const myComponent = shallow(<Area {...props} />);  
    expect(shallowToJson(myComponent)).toMatchSnapshot();
  });

  it("component should draw 9 <Cell />", () => { 
    const myComponent = shallow(<Area {...props} />); 
    expect(myComponent.find("Cell")).toHaveLength(9);
  });
  
});
