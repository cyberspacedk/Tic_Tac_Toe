import React from "react";
import { Provider } from "react-redux";
import { shallow, mount } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import configureStore from "redux-mock-store";
import  DashboardConnected, {Dashboard} from "../Dashboard";

describe("Dashboard of game", () => {
  // 1- check is component render with store
  // 2- snapshot

  const mockClick = jest.fn();
  const mockStore = configureStore();
  let store, myComponent;

  const initialstate = {
    history: [{ squares: Array(9).fill("")}],
    turn: true,
    snapshot: 2,
    makeMove: mockClick,
    playerTurn: mockClick,
    switchSnap: mockClick
  };

  beforeEach(() => {
    store = mockStore(initialstate);
    myComponent = shallow(<DashboardConnected store={store}/>);
  });

  it("check is Dashboard render", () => { 
    expect(myComponent.length).toEqual(1);
  });

  it("dashboard snapshot", () => {  
    expect(shallowToJson(myComponent)).toMatchSnapshot();
  });
  
});
