import React from "react";

import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";

import "./App.scss";

function App() {
	return (
		<div className="App align-items-stretch d-flex flex-column">
			<Header />
			<main className="d-flex flex-column text-left">
				<Search />
				<Results />
			</main>
		</div>
	);
}

export default App;
