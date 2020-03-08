import { PREFERENCE } from "../types/actions";

export const setLanguage = (language) => {
	return {
		type: PREFERENCE.SET_LANGUAGE,
		payload: language
	};
};
