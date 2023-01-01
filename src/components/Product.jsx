import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Product = () => {
	const { id } = useParams();
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	const getProduct = async () => {
		const data = await axios(`https://fakestoreapi.com/products/${id}`);
		setData(await data.data);
	};
	useEffect(() => {
		getProduct();
	}, []);

	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-md-6 mt-4">
						<img
							src={data.image}
							alt={data.title}
							height="400px"
							width="400px"
						/>
					</div>
					<div className="col-md-6  mt-4">
						<h4 className="text-uppercase text-black-50">{data.title}</h4>
						<h1 className="display-5">{data.price}</h1>
						<p className="lead fw-bolder">
							{data.rating && data.rating.rate}{" "}
							<i className="fa fa-star m-1"></i>
						</p>
						<p className="display-6  my-4">{data.description}</p>
						<NavLink to="/cart" className="btn btn-dark">
							Go to Cart
						</NavLink>
						<button className="btn btn-dark ms-2" onClick={() => navigate(-1)}>
							Back
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
