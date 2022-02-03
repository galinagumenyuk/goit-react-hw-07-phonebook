import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

// const items = createReducer([], {
//   [actions.addContact]: (state, actions) => [actions.payload, ...state],
//   [actions.deleteContact]: (state, actions) =>
//     state.filter((contact) => contact.id !== actions.payload),
// });

const filter = createReducer("", {
  [actions.filterContact]: (_, actions) => actions.payload,
});

export default combineReducers({
  // items,
  filter,
});
