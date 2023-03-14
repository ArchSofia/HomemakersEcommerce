import React from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Stack,
	Heading,
	Image,
	Text,
	Divider,
	ButtonGroup,
	Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, stock, category, imagen, precio, descripcion }) => {
	return (
		<>
			<div key={id}>
				<Card maxW="sm">
					<CardBody>
						<Image src={imagen} alt="" borderRadius="lg" />
						<Stack mt="6" spacing="3">
							<Heading size="md">{nombre}</Heading>
							{/* <Text>{descripcion}</Text> */}
							<Text color="black.600" fontSize="2xl">
								${precio}
							</Text>
							<Text color="blue.800" fontSize="l">
								Category: {category}
							</Text>
						</Stack>
					</CardBody>
					<Divider />
					<CardFooter>
						<ButtonGroup spacing="2">
							<Button variant="solid" colorScheme="gray">
								<Link to={`/item/${id}`}>Detalle</Link>
							</Button>
							<Button variant="ghost" colorScheme="gray">
								Agregar al carrito
							</Button>
						</ButtonGroup>
					</CardFooter>
				</Card>
			</div>
		</>
	);
};

export default Item;
