import { PREFERENCE } from "../types/actions";

const initialState = { language: "en-US" };

export default (state = initialState, action) => {
	switch (action.type) {
		case PREFERENCE.SET_LANGUAGE: {
			const preferenceObj = {
				...state,
				language: action.payload
			};
			return preferenceObj;
		}
		default:
			return state;
	}
};
