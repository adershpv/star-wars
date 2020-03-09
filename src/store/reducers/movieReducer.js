import { get } from "lodash";
import { MOVIE } from "../types/actions";

const initialState = {};

export default (state = initialState, action) => {
	switch (action.type) {
		case MOVIE.SET_MOVIE_DETAILS: {
			const url = get(action, "payload.url");
			return {
				...state,
				[url]: action.payload
			};
		}
		default:
			return state;
	}
};
