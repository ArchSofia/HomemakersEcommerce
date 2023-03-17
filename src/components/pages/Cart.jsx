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
	StackDivider,
	Text,
	Box,
	Textarea,
	Spacer,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { CartContext } from "../../contexts/ShoppingCartContext.jsx";
import SendOrder from "../common/SendOrder.jsx";
import { Link } from "react-router-dom";

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
							<>
								<div className="noHayProductos">
									<Heading size="md">No hay productos en el carrito</Heading>

									<Button variant="solid" colorScheme="gray">
										<Link to={"/catalogue"}>Ver productos</Link>
									</Button>
								</div>
							</>
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
								<>
									<Card>
										<CardHeader>
											<Heading size="md">Detalle del carrito</Heading>
										</CardHeader>

										<CardBody>
											<Stack divider={<StackDivider />} spacing="4">
												<Box>
													<Heading size="xs" textTransform="uppercase">
														Cantidad de productos
													</Heading>
													<Text pt="2" fontSize="sm">
														{quantity}
													</Text>
												</Box>
												<Box>
													<Heading size="xs" textTransform="uppercase">
														Precio total
													</Heading>
													<Text pt="2" fontSize="sm">
														{total > 0
															? `$ ${total}`
															: "No hay productos en el carrito"}
													</Text>
												</Box>
												<Box>
													<div className="btn-cart">
														<Button
															variant="solid"
															colorScheme="gray"
															onClick={() => setBuy(true)}
														>
															Realizar compra
														</Button>
													</div>
												</Box>
											</Stack>
										</CardBody>
									</Card>
								</>
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

							<Card>
								<CardHeader>
									<Heading size="md">Detalle del carrito</Heading>
								</CardHeader>

								<CardBody>
									<Stack divider={<StackDivider />} spacing="4">
										<Box>
											<Heading size="xs" textTransform="uppercase">
												Cantidad de productos
											</Heading>
											<Text pt="2" fontSize="sm">
												{quantity}
											</Text>
										</Box>
										<Box>
											<Heading size="xs" textTransform="uppercase">
												Precio total
											</Heading>
											<Text pt="2" fontSize="sm">
												{total > 0
													? `$ ${total}`
													: "No hay productos en el carrito"}
											</Text>
										</Box>
										<Box>
											<div className="btn-cart">
												<Button
													variant="solid"
													colorScheme="gray"
													onClick={() => setBuy(true)}
												>
													Realizar compra
												</Button>
											</div>
										</Box>
									</Stack>
								</CardBody>
							</Card>
						</div>
						<SendOrder cart={cart} total={total} />
					</>
				)}
			</div>
		</>
	);
};

export default Cart;
