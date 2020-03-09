export default function fetchHandler(
	{
		url,
		method = "GET",
		actionType,
		headers,
		body,
		secure = true,
		shouldDispatch = true,
		external = false,
		noContentType = false,
		contentType = false,
		callBack = null
	},
	successHandler = null,
	errorHandler = null
) {
	return async (dispatch, getState) => {
		let headersData = {
			Accept: "*/*"
		};

		if (!noContentType) {
			headersData["Content-Type"] = contentType || "application/json";
		}

		headersData = {
			...headersData,
			...headers
		};

		let error;
		try {
			const promise = fetch(url, {
				method,
				headers: {
					...headersData
				},
				body
			});

			const response = await promise;
			if (response.ok) {
				return successHandler
					? successHandler(response, actionType, dispatch, shouldDispatch)
					: defaultSuccessHandler(response, actionType, dispatch, shouldDispatch, callBack);
			} else {
				try {
					let json = response.json && (await response.json());
					json = json || {};
					error = errorHandler ? errorHandler(json, dispatch) : defaultErrorHandler(json, dispatch);
				} catch (e) {
					error = errorHandler ? errorHandler(error, dispatch) : defaultErrorHandler(error, dispatch);
				}
			}
		} catch (e) {
			error = errorHandler ? errorHandler(e) : defaultErrorHandler(e);
		}

		if (error) {
			// throw new Error(error);
			console.error(error);
		}
	};
}

async function defaultSuccessHandler(res, actionType, dispatch, shouldDispatch, callBack) {
	let json;
	try {
		json = res.json && (await res.json());
	} catch (error) {
		console.log(`Response is not a json object`); // eslint-disable-line no-console
	}
	json = json || {};

	if (callBack) {
		callBack(json);
	}

	if (shouldDispatch) {
		dispatch({
			type: actionType,
			payload: json
		});
		return json;
	} else {
		return json;
	}
}

function defaultErrorHandler(res, dispatch) {
	if (res && res.error && res.error.message) {
		console.error(res.error.message);
	}

	return res;
}
