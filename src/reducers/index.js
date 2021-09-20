import { combineReducers } from "redux";

import { reducer as form } from "redux-form";

const rootReducer = combineReducers({
  form,
});

export default rootReducer;

export function fetchRecentPosts() {
  return function (dispatch) {
    //perform our request in here.
    console.log("hello");
  };
}
