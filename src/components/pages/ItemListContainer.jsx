import React from "react";
import ItemList from "../common/ItemList";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
	const [productos, setProductos] = useState([]);
	const { category } = useParams();

	useEffect(() => {
		const db = getFirestore();
		const productosCollection = collection(db, "productos");
		getDocs(productosCollection).then((querySnapshot) => {
			const productos = querySnapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			setProductos(productos);
		});
	}, []);

	const catFilter = productos.filter(
		(producto) => producto.category === category
	);

	return (
		<div className="itemListContainer">
			{category ? (
				<ItemList productos={catFilter} />
			) : (
				<ItemList productos={productos} />
			)}
		</div>
	);
	/* 	const getDatos = () => {
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

	if (category === undefined) {
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
	} else {
		const catFilter = Data.filter((producto) => producto.category === category);
		return (
			<div>
				<Center h="100px" color="black">
					<Heading as="h2" size="2xl">
						Productos por categoría
					</Heading>
				</Center>
				{catFilter ? (
					<ItemList productos={catFilter} />
				) : (
					<ItemList productos={Data} />
				)}
			</div>
		);
	} */
};

export default ItemListContainer;
