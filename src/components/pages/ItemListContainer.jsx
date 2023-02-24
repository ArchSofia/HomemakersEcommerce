import React from "react";
import ItemList from "../common/ItemList";
import Data from "/Users/sofiadiazvaldez/Desktop/REACT_CH_2023/proyecto/preEntrega1/src/data.json";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";

const ItemListContainer = () => {
	const { categoria } = useParams();

	const getDatos = () => {
		return new Promise((resolve, reject) => {
			if (Data.length === 0) {
				reject(new Error("No hay datos"));
			}
			setTimeout(() => {
				resolve(Data);
			}, 2000);
		});
	};

	async function fetchingData() {
		try {
			const datosFetched = await getDatos();
		} catch (err) {
			console.log(err);
		}
	}

	fetchingData();

	if (categoria === undefined) {
		return (
			<div>
				<Center h="100px" color="black">
					<Heading as="h2" size="2xl">
						Todos los productos
					</Heading>
				</Center>
				<ItemList productos={Data} />
			</div>
		);
	}

	const catFilter = Data.filter((producto) => producto.categoria === categoria);
	return (
		<div>
			<Center h="100px" color="black">
				<Heading as="h2" size="2xl">
					probando
				</Heading>
			</Center>
			{catFilter ? (
				<ItemList productos={catFilter} />
			) : (
				<ItemList productos={Data} />
			)}
		</div>
	);
};

export default ItemListContainer;
