import React from "react";
import imagen from "/Users/sofiadiazvaldez/Desktop/REACT_CH_2023/proyecto/preEntrega1/src/assets/larusi-havana-bed-linen-1638961198.jpeg";
import { Center, Heading, Box, Image, Spacer } from "@chakra-ui/react";
const Home = () => {
	return (
		<>
			<Center>
				<Box boxSize={"xxl"}>
					<img src={imagen} alt="imagen de una cama con ropa de cama de lino" />
				</Box>
			</Center>
		</>
	);
};

export default Home;
