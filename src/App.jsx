import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import { ChakraProvider } from "@chakra-ui/react";

import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
	return (
		<BrowserRouter>
		<ChakraProvider>
			<NavBar />
			<Routes>
				<Route exact path="/" element={<ItemListContainer/>}/>
				<Route exact path="/category/:id" element={<ItemListContainer/>}/>
				<Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
			</Routes>
			<ItemListContainer greeting={"Bienvenidos a HomeMakers"} />
			
		</ChakraProvider>
		</BrowserRouter>
	);
}

export default App;
