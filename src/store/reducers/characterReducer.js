import { get } from "lodash";

import { CHARACTER } from "../types/actions";

const initialState = { results: [], notFound: false };

export default (state = initialState, action) => {
	switch (action.type) {
		case CHARACTER.GET_CHARACTERS: {
			const results = get(action, "payload.results", []);
			return {
				...state,
				results,
				notFound: results.length === 0
			};
		}
		default:
			return state;
	}
};
