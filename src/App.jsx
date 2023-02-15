import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Land from "./components/landing/Land";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={<Land />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
