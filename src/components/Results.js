import React, { useState } from "react";
import { connect } from "react-redux";
import { Accordion, Card, Button } from "react-bootstrap";
import _ from "lodash";

import MovieDetails from "./MovieDetails";

const Results = ({ characters, moviesList }) => {
	const [accordianKey, setAccordianKey] = useState(0);

	const renderCards = (items) => {
		return items.map((item, i) => {
			const films = item.films;
			let coActors = [];
			films.forEach((filmUrl) => {
				if (moviesList[filmUrl]) {
					coActors = coActors.concat(moviesList[filmUrl].characters);
				}
			});
			coActors = coActors.filter((i) => i !== item.url);
			const mostPlayedCoActor = _.head(
				_(coActors)
					.countBy()
					.entries()
					.maxBy(_.last)
			);
			return (
				<Card key={i}>
					<Card.Header>
						<Accordion.Toggle as={Button} onClick={() => setAccordianKey(i)} variant="link" eventKey={i}>
							{item.name}
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey={i}>
						<React.Fragment>
							{accordianKey === i && (
								<React.Fragment>
									{mostPlayedCoActor && (
										<p className="mt-4 ml-4 mr-4 mb-0">Most frequent co-actor : {mostPlayedCoActor}</p>
									)}
									<Card.Body>
										{films.map((url, i) => (
											<MovieDetails key={i} url={url} />
										))}
									</Card.Body>
								</React.Fragment>
							)}
						</React.Fragment>
					</Accordion.Collapse>
				</Card>
			);
		});
	};

	if (characters && characters.length > 0) {
		return (
			<Accordion className="mb-4" defaultActiveKey="0">
				{renderCards(characters)}
			</Accordion>
		);
	}
	return null;
};

const mapStateToProps = (store) => ({
	characters: store.Character.results,
	moviesList: store.Movie
});

export default connect(mapStateToProps)(Results);
