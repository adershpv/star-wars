import fetchHandler from "../../utils/fetchHandler";
import { CHARACTER } from "../types/actions";

export const getCharacters = (searchText) => {
	const fetchOptions = {
		url: `https://swapi.co/api/people/?search=${searchText}&format=json`,
		method: "GET",
		actionType: CHARACTER.GET_CHARACTERS
	};
	return fetchHandler(fetchOptions);
};
