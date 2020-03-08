import React from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import { setLanguage } from "../store/actions";

const Header = (props) => {
	const { setLanguage, currentLanguage } = props;
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">ReactApp</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#link">Link</Nav.Link>
					<NavDropdown title={currentLanguage} id="basic-nav-dropdown">
						<NavDropdown.Item onClick={() => setLanguage("English")}>English</NavDropdown.Item>
						<NavDropdown.Item onClick={() => setLanguage("Spanish")}>Spanish</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

const mapStateToProps = (store) => ({
	currentLanguage: store.Preference.language
});

const mapDispatchToProps = {
	setLanguage
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
