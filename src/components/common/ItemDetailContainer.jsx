import React from "react";
import ItemDetail from "./ItemDetail";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
	/* const getDatos = () => {
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
	fetchingData(); */

	const [data, setData] = useState([]);
	useEffect(() => {
		const db = getFirestore();
		const productosCollection = collection(db, "productos");
		getDocs(productosCollection).then((querySnapshot) => {
			const productos = querySnapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			setData(productos);
		});
	}, []);

	return (
		<>
			<ItemDetail productos={data} />
		</>
	);
};

export default ItemDetailContainer;
