import React from "react";
import { Center, Heading, Box, Image, Spacer } from "@chakra-ui/react";
const Home = () => {
	return (
		<>
			<Center>
				<Box boxSize={"xxl"}>
					<img
						src={
							"https://res.cloudinary.com/djshhutej/image/upload/v1678728421/Homemakers/larusi-havana-bed-linen-1638961198_noclhn.jpg"
						}
						alt="imagen de una cama con ropa de cama de lino"
					/>
				</Box>
			</Center>
		</>
	);
};

export default Home;
