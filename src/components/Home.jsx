import React from "react";
import bg from "../image/bg.jpg";
import Products from "./Products";

const Home = () => {
	return (
		<div>
			<div className="container card text-bg-dark mt-1">
				<img src={bg} className="card-img" alt="background" height="550px" />
				<div className="card-img-overlay d-flex flex-column justify-content-center">
					<h5 className="card-title">New Season</h5>
					<p className="card-text">Check out all the trends</p>
				</div>
			</div>
			<Products />
		</div>
	);
};

export default Home;
