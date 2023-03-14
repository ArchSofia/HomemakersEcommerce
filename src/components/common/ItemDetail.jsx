import {
	Center,
	Card,
	CardBody,
	ButtonGroup,
	Link,
	Image,
	Stack,
	Heading,
	Text,
	Button,
	CardFooter,
	Divider,
} from "@chakra-ui/react";
import imagenes from "/Users/sofiadiazvaldez/Desktop/REACT_CH_2023/proyecto/preEntrega1/src/assets/1.jpeg";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { CartContext } from "../../contexts/ShoppingCartContext.jsx";
import { useContext } from "react";

const ItemDetail = ({ productos }) => {
	const { id } = useParams();
	const [count, setCount] = useState(0);
	const { addToCart } = useContext(CartContext);

	const [producto, setProducto] = useState([]);

	useEffect(() => {
		const db = getFirestore();

		const productosRef = doc(db, "productos", `${id}`);

		getDoc(productosRef).then((snapshot) => {
			if (snapshot.exists()) {
				setProducto(snapshot.data());
			} else {
				console.log("No such document!");
			}
		});
	}, []);

	const productoFilter = productos.filter((producto) => producto.id == id);
	return (
		<>
			{productoFilter.map((producto) => (
				<div key={producto.id}>
					<Center p="1rem">
						<Card maxW="sm">
							<CardBody>
								<Image src={producto.imagen} alt="" borderRadius="lg" />
								<Stack mt="6" spacing="3">
									<Heading size="md">{producto.nombre}</Heading>
									<Text>{producto.descripcion}</Text>
									<Text color="black.600" fontSize="2xl">
										${producto.precio}
									</Text>
									<Text color="blue.800" fontSize="l">
										Category: {producto.category}
									</Text>
								</Stack>
							</CardBody>
							<Divider />
							<Center>
								<CardFooter>
									<ButtonGroup spacing="2">
										{/* <Button variant="solid" colorScheme="gray">
										<Link to={`/item/${id}`}>Detalle</Link>
									</Button> */}
										<ItemCount
											stock={producto.stock}
											id={producto.id}
											precio={producto.precio}
											nombre={producto.nombre}
										/>
										<Button
											variant="ghost"
											colorScheme="gray"
											onClick={() =>
												addToCart({
													item: producto,
													quantity: count,
												})
											}
										>
											Agregar al carrito
										</Button>
									</ButtonGroup>
								</CardFooter>
							</Center>
						</Card>
					</Center>
				</div>
			))}
		</>
	);
};

export default ItemDetail;
