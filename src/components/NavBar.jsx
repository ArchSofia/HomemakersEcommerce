import React from "react";
import { Container, Flex, Spacer, Box, Heading, Button } from "@chakra-ui/react";
import CartWidget from "./CartWidget";
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
  } from '@chakra-ui/react'
  import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
	return (
		<>
			<Container maxW="100rem" bg="gray.900" color="#262626" padding={"0.5rem"}>
				<Flex alignContent="center" gap="2">
					<Box p="2" color="white">
						<Heading size="md"> <Link to={"/"}>HomeMakers</Link></Heading>
					</Box>
					
					<Spacer/>
					<Box>
					<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Categorias
  </MenuButton>
  <MenuList>
    <NavLink to={`/category/${almohadones}`}><MenuItem>Almohadones</MenuItem></NavLink>
    <MenuItem><Link to={"/category/:id"}>Mantas</Link></MenuItem>
    <MenuItem><Link to={"/category/:id"}>Tu Cama</Link></MenuItem>
  </MenuList>
</Menu>
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
