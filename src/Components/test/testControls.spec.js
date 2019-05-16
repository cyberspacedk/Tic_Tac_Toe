import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Controls from "../Controls";

describe("Controls component.History actions and show current", () => {
    
// 1- snapshot
// 2- simulate. click back
// 3- simulate. click forward
// 4- simulate. string value

  const mockClick = jest.fn(); 

  const props = {
    winner: "",
    length: 1,
    snapshot: 1,
    switchSnap: mockClick
  };

  const myComponent = shallow(<Controls {...props} />);

  it("Controls snapshot", () => { 
    expect(shallowToJson(myComponent)).toMatchSnapshot();
  });

  it("Simulate. check click back ", () => { 
    myComponent.find('[name="go-back"]').simulate('click');
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it("Simulate. check click forward", () => {  
    myComponent.find('[name="go-forward"]').simulate('click');
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
 
  it("Simulate. should show current status (move or winner)", () => {
    const nextProps = {
      ...props,
      winner: "Win Player-1"
    };
    const myComponent = shallow(<Controls {...nextProps} />);
    expect(myComponent.find("span").text()).toEqual(nextProps.winner);
  });

  
});
