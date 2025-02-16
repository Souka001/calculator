import { createStore } from "redux";

const initialState = { display: "0", prevResult: null };

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR":
      return { ...state, display: "0", prevResult: null };

    case "APPEND":
      if (state.prevResult) {
        return { ...state, display: action.payload, prevResult: null };
      }
      if (state.display === "0" && /[0-9]/.test(action.payload)) {
        return { ...state, display: action.payload };
      }
      if (action.payload === "." && state.display.includes(".")) return state;
      if (["+", "-", "*", "/"].includes(action.payload) && ["+", "*", "/"].includes(state.display.slice(-1))) {
        return { ...state, display: state.display.slice(0, -1) + action.payload };
      }
      return { ...state, display: state.display + action.payload };

    case "EVALUATE":
      try {
        return { ...state, display: Function(`"use strict"; return (${state.display})`)().toString(), prevResult: state.display };
      } catch {
        return { ...state, display: "Error" };
      }

    default:
      return state;
  }
};

export const store = createStore(calculatorReducer);
