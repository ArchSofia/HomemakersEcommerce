import {
	Container,
	Heading,
	Stack,
	Input,
	Button,
	Text,
	Center,
	FormControl,
	FormLabel,
} from "@chakra-ui/react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useState } from "react";
import { CartContext } from "../../contexts/ShoppingCartContext.jsx";

const SendOrder = ({ cart, total }) => {
	const [orderId, setOrderId] = useState(null);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === "" || email === "" || phone === "") {
			alert("No pueden existir campos vacios");
		} else {
			addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
		}
		setEmail(" ");
		setName(" ");
		setPhone(" ");
	};

	const db = getFirestore();
	const ordersCollection = collection(db, "orden");

	const order = {
		// estos datos los recibo de un formulario
		/* buyer: { name, phone, email }, */
		buyer: { name, phone, email },
		// estos datos de item los toma del cart
		items: [{ cart }],
		total: { total },
	};

	// TODO: armar el formulario como un componente aparte y solo renderizarlo si hay algo en el carrito y lo consumo desde cart
	// renderizado condicional.  sino usestate si en el cart hay más de un item ahí habilito los campos de mi form, sino estan deshabilitados

	return (
		<div>
			<Center>
				<Heading>Ordenes de envío</Heading>
			</Center>

			<Container>
				<FormControl>
					<form onSubmit={handleSubmit}>
						<FormLabel>Nombre</FormLabel>
						<Input size="lg" onChange={(e) => setName(e.target.value)} />
						<FormLabel>Email</FormLabel>
						<Input size="lg" onChange={(e) => setEmail(e.target.value)} />
						<FormLabel>Phone</FormLabel>
						<Input size="lg" onChange={(e) => setPhone(e.target.value)} />
						<Button colorScheme="gray" type="submit" m={5}>
							Realizar compra
						</Button>
					</form>
				</FormControl>
			</Container>
			<Center>
				<Text as="b" m={3} fontSize="xl">
					Order ID:{" "}
				</Text>
				<Text as="mark" fontSize="2xl">
					{orderId}
				</Text>
			</Center>
		</div>
	);
};

export default SendOrder;
