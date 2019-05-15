import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Controls from "../Controls";

describe("Controls component.History actions and show current", () => {
    
// 1- snapshot
// 2- click back
// 3- click forward
// 4- string value

  const mockClick = jest.fn(); 
  const props = {
    winner: "",
    length: 1,
    snapshot: 1,
    switchSnap: mockClick
  };

  it("snapshot", () => { 
    const myComponent = shallow(<Controls {...props} />);
    expect(shallowToJson(myComponent)).toMatchSnapshot();
  });

  it("check click back ", () => {
    const myComponent = shallow(<Controls {...props} />);
    myComponent.find('[name="go-back"]').simulate('click');
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it("check click forward", () => { 
    const myComponent = shallow(<Controls {...props} />);
    myComponent.find('[name="go-forward"]').simulate('click');
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
 
  it("should show current status (move or winner)", () => {
    const nextProps = {
      ...props,
      winner: "Win Player-1"
    };
    const myComponent = shallow(<Controls {...nextProps} />);
    expect(myComponent.find("span").text()).toEqual(nextProps.winner);
  });

  
});
