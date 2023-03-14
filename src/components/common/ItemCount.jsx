import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "../../contexts/ShoppingCartContext.jsx";
import {
	Text,
	ButtonGroup,
	IconButton,
	Tooltip,
	Center,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ItemCount = ({ stock, id, precio, nombre }) => {
	const [count, setCount] = useState(0);
	const [cart, setCart] = useContext(CartContext);

	const onAdd = () => {
		setCount(count + 1);
	};

	const onSubstract = () => {
		setCount(count - 1);
	};

	const addToCart = () => {
		setCart((currItems) => {
			const isItemFound = currItems.find((item) => item.id == id);
			if (isItemFound) {
				return currItems.map((item) => {
					if (item.id == id) {
						return { ...item, quantity: item.quantity + count };
					} else {
						return item;
					}
				});
			} else {
				return [...currItems, { id, quantity: count, precio, nombre }];
			}
		});
	};

	return (
		<>
			<ButtonGroup size="sm" isAttached variant="outline">
				{count < 1 ? (
					<Tooltip label="mínimo permitido" placement="bottom">
						<IconButton icon={<MinusIcon />} isDisabled />
					</Tooltip>
				) : (
					<IconButton icon={<MinusIcon />} onClick={onSubstract} />
				)}
				<Center w="50px" h="30px">
					<Text as="b">{count}</Text>
				</Center>
				{count < stock ? (
					<IconButton icon={<AddIcon />} onClick={onAdd} />
				) : (
					<Tooltip label="no hay más stock que el actual" placement="bottom">
						<IconButton icon={<AddIcon />} isDisabled />
					</Tooltip>
				)}
			</ButtonGroup>
		</>
	);
};

export default ItemCount;
