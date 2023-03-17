import React from "react";
import {
	FormControl,
	FormLabel,
	Input,
	Stack,
	Image,
	FormHelperText,
	Card,
	Center,
	CardBody,
	Heading,
	Button,
	Container,
	CardHeader,
	CardFooter,
	Text,
	Box,
	Flex,
	Textarea,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { CartContext } from "../../contexts/ShoppingCartContext.jsx";
import SendOrder from "../common/SendOrder.jsx";

const Cart = () => {
	const [cart, setCart] = useContext(CartContext);
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");

	const deleteFromCart = (id) => {
		let carritoNuevo = cart.filter((item) => item.id !== id);
		setCart(carritoNuevo);
	};

	const clearCart = () => {
		setCart([]);
	};

	const quantity = cart.reduce((acc, curr) => {
		return acc + curr.quantity;
	}, 0);

	const getQuantityById = (id) => {
		let product = cart.find((element) => element.id === id);
		return product?.quantity;
	};

	const getTotalItems = () => {
		const total = cart.reduce((acc, element) => {
			return acc + element.quantity;
		}, 0);

		return total;
	};

	const getTotalPrice = () => {
		const total = cart.reduce((acc, element) => {
			return acc + element.precio * element.quantity;
		}, 0);

		return total;
	};

	const total = getTotalPrice();

	return (
		<>
			<Center bg="white" h="100px" color="black">
				<Heading as="h2" size="2xl">
					Carrito
				</Heading>
			</Center>
			{cart.map((item) => {
				return (
					<Container key={item.id} className="main-catalogue">
						<Card maxW="sm">
							<CardHeader>
								<Heading size="md">{item.nombre}</Heading>
							</CardHeader>
							<CardBody>
								<Image src={item.imagen} alt="" borderRadius="lg" />
								<Stack mt="6" spacing="3">
									<Text as="b">Cantidad: {item.quantity}</Text>
									<Text>Precio: $ {item.precio}</Text>
									<Text>Precio parcial: $ {item.quantity * item.precio}</Text>
								</Stack>
							</CardBody>
							<CardFooter>
								<Button
									colorScheme="red"
									onClick={() => deleteFromCart(item.id)}
								>
									Eliminar del carrito
								</Button>
							</CardFooter>
						</Card>
					</Container>
				);
			})}

			<div>
				<h2>Detalle del carrito:</h2>
				<h3>Cantidad de productos: {quantity} </h3>
				<h3>
					Precio total: {total > 0 ? total : "No hay productos en el carrito"}
				</h3>
			</div>

			<SendOrder cart={cart} />
		</>
	);
};

export default Cart;
