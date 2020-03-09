import { combineReducers } from "redux";

import Character from "./characterReducer";
import Movie from "./movieReducer";

const rootReducer = combineReducers({
	Character,
	Movie
});

export default rootReducer;
