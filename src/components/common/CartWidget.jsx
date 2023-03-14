import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/ShoppingCartContext.jsx";
import { useContext } from "react";

const CartWidget = () => {
	const [cart, setCart] = useContext(CartContext);

	const quantity = cart.reduce((acc, curr) => {
		return acc + curr.quantity;
	}, 0);

	return (
		<>
			<Link to={"/cart"}>
				<span className="material-symbols-outlined">shopping_cart</span>
			</Link>
			<span>{quantity}</span>
		</>
	);
};

export default CartWidget;
