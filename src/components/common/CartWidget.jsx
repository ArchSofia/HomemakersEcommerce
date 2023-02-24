import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
	return (
		<>
			<Link to={"/cart"}>
				<span className="material-symbols-outlined">shopping_cart</span>
			</Link>
			<span>0</span>
		</>
	);
};

export default CartWidget;
