import { createStore } from "redux";
let testData = require("../components/data/testData.json");

const intialState = {
  beers: [],
};

const beerDataReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, beers: [...state.beers, action.payload] };

    default:
      return state;
  }
};

const store = createStore(beerDataReducer);
export default store;
