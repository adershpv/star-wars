import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";

import { getMovieDetails } from "../store/actions";

const MovieDetails = ({ url, moviesList, getMovieDetails }) => {
	const [details, setDetails] = useState(null);

	useEffect(() => {
		if (moviesList && moviesList[url]) {
			setDetails(moviesList[url]);
		}
	}, [moviesList, url]);

	useEffect(() => {
		if (moviesList && !moviesList[url]) {
			getMovieDetails(url);
		}
	}, [url, getMovieDetails]);

	if (details) {
		return (
			<Card className="mb-4">
				<Card.Body>
					<Card.Title>{details.title}</Card.Title>
					<Card.Text>{details.opening_crawl}</Card.Text>
				</Card.Body>
			</Card>
		);
	}

	return null;
};

const mapStateToProps = (store) => ({
	moviesList: store.Movie
});

const mapDispatchToProps = {
	getMovieDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
