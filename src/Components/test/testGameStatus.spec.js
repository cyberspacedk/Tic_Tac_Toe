/* eslint-disable */
import React from "react";
import { Provider } from "react-redux";
import { shallow, mount } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import configureStore from "redux-mock-store";
import GameStatusConnected, { GameStatus } from "../GameStatus";

describe("GameStatus. show game results", () => {

  // 1- check. render
  // 2- snapshot
  // 3- check. props from store. Count played games
  // 4- check. props from store. Player-1 score
  // 5- check. props from store. Player-2 score
  // 6- check. is component render all chilren

  const mockStore = configureStore();
  let store, myComponent;

  const initialState = {
    playedGame: 7,
    playerScore: {
      player1: 2,
      player2: 5
    }
  };

  beforeEach(() => {
    store = mockStore(initialState);
    myComponent = mount(
      <Provider store={store}>
        <GameStatusConnected />
      </Provider>
    );
  });

  it("Check. render component ", () => {
    expect(myComponent.length).toEqual(1);
  });

  it("GameStatus snapshot", () => {
    expect(shallowToJson(myComponent)).toMatchSnapshot();
  });

  it("Check. props from store. Count played games", () => {
    expect(myComponent.find('[name="sets-played"]').text()).toEqual(
      "Sets played: 7"
    );
  });

  it("Check. props from store. Player-1 score", () => {
    expect(myComponent.find('[name="player-1"]').text()).toEqual(
      "Player 1 wins : 2"
    );
  });

  it("Check. props from store. Player-2 score", () => {
    expect(myComponent.find('[name="player-2"]').text()).toEqual(
      "Player 2 wins : 5"
    );
  });

  it("Check. is component render all chilren", () => {
    expect(myComponent.find("p").length).toEqual(3);
  });
 
});
