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
	const [buy, setBuy] = useState(false);

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
			<div>
				<Center bg="white" h="100px" color="black">
					<Heading as="h2" size="2xl">
						Carrito
					</Heading>
				</Center>
			</div>

			<div>
				{!buy ? (
					<div>
						{cart.length < 1 ? (
							<Text>No hay productos en el carrito</Text>
						) : (
							<div>
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
														<Text>
															Precio parcial: $ {item.quantity * item.precio}
														</Text>
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
							</div>
						)}

						<div className="cart-info">
							{cart.length > 0 && (
								<div>
									<h2>Detalle del carrito:</h2>
									<h3>Cantidad de productos: {quantity} </h3>
									<h3>
										{" "}
										Precio total:{" "}
										{total > 0 ? total : "No hay productos en el carrito"}{" "}
									</h3>
									<h1>El total del carrito es ${total}</h1>

									<div className="btn-cart">
										<Button
											variant="solid"
											colorScheme="gray"
											onClick={() => setBuy(true)}
										>
											Realizar compra
										</Button>
									</div>
								</div>
							)}
						</div>
					</div>
				) : (
					<>
						<div>
							{cart.length < 1 ? (
								<Text>No hay productos en el carrito</Text>
							) : (
								<div>
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
															<Text>
																Precio parcial: $ {item.quantity * item.precio}
															</Text>
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
								</div>
							)}

							<div className="cart-info">
								{cart.length > 0 && (
									<div>
										<h2>Detalle del carrito:</h2>
										<h3>Cantidad de productos: {quantity} </h3>
										<h3>
											{" "}
											Precio total:{" "}
											{total > 0
												? total
												: "No hay productos en el carrito"}{" "}
										</h3>
										<h1>El total del carrito es ${total}</h1>

										<div className="btn-cart">
											<Button
												variant="solid"
												colorScheme="gray"
												onClick={() => setBuy(true)}
											>
												Ir al checkout
											</Button>
										</div>
									</div>
								)}
							</div>
						</div>
						<SendOrder cart={cart} total={total} />
					</>
				)}
			</div>
		</>
	);
};

export default Cart;
