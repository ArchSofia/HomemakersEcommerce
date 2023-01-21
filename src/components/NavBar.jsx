import React from "react";
import { Container, Flex, Spacer, Box, Heading } from "@chakra-ui/react";
import CartWidget from "./CartWidget";
const NavBar = () => {
	return (
		<>
			<Container maxW="100rem" bg="gray.900" color="#262626">
				<Flex alignContent="center" gap="2">
					<Box p="2" color="white">
						<Heading size="md">HomeMakers</Heading>
					</Box>
					<Spacer />
					<Box p="2" color="white">
						<CartWidget />
					</Box>
				</Flex>
			</Container>
		</>
	);
};

export default NavBar;
