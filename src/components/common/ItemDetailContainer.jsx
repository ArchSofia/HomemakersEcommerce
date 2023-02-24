import React from "react";
import ItemDetail from "./ItemDetail";
import Data from "/Users/sofiadiazvaldez/Desktop/REACT_CH_2023/proyecto/preEntrega1/src/data.json";

const ItemDetailContainer = () => {
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
	return (
		<>
			<ItemDetail productos={Data} />
		</>
	);
};

export default ItemDetailContainer;
