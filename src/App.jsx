import { useState } from "react";
import "./App.css";
import NavBar from "./components/common/NavBar";
import ItemListContainer from "./components/common/ItemListContainer";
import { ChakraProvider } from "@chakra-ui/react";

import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./components/common/ItemDetailContainer";
import Footer from "./components/common/Footer";

function App() {
	return (
		<ChakraProvider>
		<BrowserRouter>
		
			<NavBar />
			<Routes>
				<Route exact path="/" element={<ItemListContainer/>}/>
				<Route exact path="/category/:id" element={<ItemListContainer/>}/>
				<Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
			</Routes>
			<ItemListContainer greeting={"Bienvenidos a HomeMakers"} />
		</BrowserRouter>
		<Footer/>
		</ChakraProvider>
		
	);
}

export default App;
