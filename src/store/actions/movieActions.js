import fetchHandler from "../../utils/fetchHandler";
import { MOVIE } from "../types/actions";

export const getMovieDetails = (url) => {
	const fetchOptions = {
		url: `${url}?format=json`,
		method: "GET",
		actionType: MOVIE.SET_MOVIE_DETAILS
	};
	return fetchHandler(fetchOptions);
};
