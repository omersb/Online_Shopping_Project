import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componets/Home";
import Navbar from "./componets/Navbar";
import Products from "./componets/Products";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
			</Routes>
		</div>
	);
}

export default App;
