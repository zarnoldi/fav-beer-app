import { createStore } from "redux";
let testData = require("../components/data/testData.json");

const intialState = {
  beers: [],
  moreInfoData: [],
};

const beerDataReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, beers: [...state.beers, action.payload] };

    case "CLEAR":
      console.log("Store Cleared");
      return { ...state, beers: [] };

    case "MORE_INFO_MODAL":
      return {
        ...state,
        moreInfoData: [...state.moreInfoData, action.payload],
      };

    case "CLEAR_MORE_INFO_MODAL":
      return { ...state, moreInfoData: [] };

    default:
      return state;
  }
};

const store = createStore(beerDataReducer);
export default store;
