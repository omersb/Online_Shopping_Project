import React, { useEffect, useState } from "react";
import { Axios } from "axios";
import { NavLink } from "react-router-dom";

const Products = () => {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState(data);

	const getProducts = async () => {
		const response = await Axios("https://fakestoreapi.com/products");
		console.log(response.data);
		setData(await response.data);
		setFilter(await response.data);
	};

	useEffect(() => {
		getProducts();
	},[]);

	const handleClick = (category) => {
		setFilter(data.filter((item) => item.category === category));
	};

	return (
		<div>
			<div className="container my-5 py-5">
				<div className="row">
					<div className="col-12 mb-5">
						<h1 className="display-6 fw-bolder text-center">Latest Products</h1>
						<hr />
					</div>
				</div>
				<div className="row  justify-content-center">
					<div className="buttons d-flex justify-content-center mb-5 pb-5">
						<button
							className="btn btn-outline-dark me-2"
							onClick={() => setFilter(data)}
						>
							All
						</button>
						<button
							className="btn btn-outline-dark me-2"
							onClick={() => handleClick("men's clothing")}
						>
							Men's Category
						</button>
						<button
							className="btn btn-outline-dark me-2"
							onClick={() => handleClick("women's clothing")}
						>
							Women's Category
						</button>
						<button
							className="btn btn-outline-dark me-2"
							onClick={() => handleClick("jewelery")}
						>
							Jewelery
						</button>
						<button
							className="btn btn-outline-dark me-2"
							onClick={() => handleClick("electronic")}
						>
							Electronic
						</button>
					</div>

					{filter.map((item) => {
						return (
							<>
								<div className="col-md-3 mb-4">
									<div className="card">
										<img
											src={item.image}
											className="card-img-top p-3"
											alt={item.title}
											height="250px"
										/>
										<div className="card-body">
											<h5 className="card-title mb-0">
												{item.title.substring(0, 12)}...
											</h5>
											<p className="card-text lead fw-bolder">${item.price}</p>
											<NavLink
												to={`products/${item.id}`}
												className="btn btn-outline-dark"
											>
												Buy Now
											</NavLink>
										</div>
									</div>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Products;
