import React from "react";
import Hero from "./Hero";
import Skills from "./Skills";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Contact from "../contact/Contact";

function Land() {
	return (
		<>
			<Header />
			<Hero />
			<Skills />
			<Contact />
			<Footer />
		</>
	);
}

export default Land;
