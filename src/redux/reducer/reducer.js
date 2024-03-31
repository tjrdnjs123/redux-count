import { toHaveAccessibleDescription } from "@testing-library/jest-dom/matchers";

let initialState = {
  count: 0,
  name: "",
  text: "",
};

function reducer(state = initialState, action) {
  console.log("액션", action);
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...state, count: state.count - 1 };
  } else if (action.type === "RESET") {
    return { ...state, count: 0, name: "", text: "" };
  } else if (action.type === "LOGIN") {
    return { ...state, name: action.payload.name, text: action.payload.text };
  }

  return { ...state };
}

export default reducer;
