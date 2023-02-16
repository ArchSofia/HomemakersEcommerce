import React from "react";
import {
	FormControl,
	FormLabel,
	Input,
	FormHelperText,
	Button,
	Container,
	Box,
	Flex,
	Textarea,
} from "@chakra-ui/react";

const Cart = () => {
	return (
		<>
			<Container>
				<FormControl>
					<Box>
						<FormLabel>Nombre y apellido</FormLabel>
						<Input
							type="text"
							placeholder="Escriba su nombre y apellido completo"
						/>
						<FormLabel>Correo electrónico</FormLabel>
						<Input type="email" placeholder="ejemplo@gmail.com" />
					</Box>
					<FormLabel>Escriba su mensaje aquí</FormLabel>
					<Textarea></Textarea>
					<Box className="btn-send">
						<Button colorScheme="teal" variant="outline">
							Enviar mensaje
						</Button>
					</Box>
				</FormControl>
			</Container>
		</>
	);
};

export default Cart;
