import { combineReducers } from "redux";

// import all reducers here
import picturesReducer from "./picturesReducer";

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  pictures: picturesReducer
});

// make the combined reducers available for import
export default reducers;