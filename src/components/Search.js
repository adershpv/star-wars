import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";

import { getCharacters } from "../store/actions";

const messages = {
	EMPTY: "Enter your character name",
	NOT_FOUND: "No character found, please try with different name"
};

const Search = ({ getCharacters, notFound }) => {
	const [searchText, setSearchText] = useState("");
	const [invalid, setInvalid] = useState(false);
	const [message, setMessage] = useState("");

	useEffect(() => {
		if (notFound) {
			setMessage(messages.NOT_FOUND);
		}
	}, [notFound]);

	const onSubmit = (e) => {
		e.preventDefault();
		if (!searchText) {
			setInvalid(true);
			setMessage(messages.EMPTY);
		} else {
			getCharacters(searchText);
		}
	};

	const typing = (e) => {
		invalid && setInvalid(false);
		message && setMessage("");
		setSearchText(e.target.value);
	};

	return (
		<div className="d-flex flex-wrap justify-content-center align-content-center container">
			<Form className="d-flex align-content-center flex-column mb-5" onSubmit={onSubmit}>
				<Form.Group>
					<Form.Control
						className="mb-0"
						size="lg"
						type="text"
						placeholder="Search for characters"
						value={searchText}
						onChange={typing}
					/>
				</Form.Group>
				{message && <span className={`text-left ${invalid && "color-red"}`}>{message}</span>}
			</Form>
		</div>
	);
};

const mapStateToProps = (store) => ({
	notFound: store.Character.notFound
});

const mapDispatchToProps = {
	getCharacters
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
