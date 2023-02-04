import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
	return (
		<>
		<Link to={"/"}><span className="material-symbols-outlined">shopping_cart</span></Link>
			
		</>
	);
};

export default CartWidget;
