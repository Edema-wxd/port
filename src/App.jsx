import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Land from "./components/landing/Land";
import Port from "./components/Port/Port";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={<Land />}></Route>
					<Route exact path="/contact" element={<Contact />} />
					<Route exact path="/portfolio" element={<Port />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
