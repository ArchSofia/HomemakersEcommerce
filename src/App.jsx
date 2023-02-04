import { useState } from "react";
import "./App.css";
import NavBar from "./components/common/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer";
import { ChakraProvider } from "@chakra-ui/react";

import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./components/common/ItemDetailContainer";
import Footer from "./components/common/Footer";
import Home from "./components/pages/Home";

function App() {
	return (
		<ChakraProvider>
		<BrowserRouter>
		
			<NavBar />
			<Routes>
			<Route exact path="/home" element={<Home/>}/>
				<Route exact path="/catalogue" element={<ItemListContainer/>}/>
				<Route exact path="/category/:id" element={<ItemListContainer/>}/>
				<Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
			</Routes>
		</BrowserRouter>
		<Footer/>
		</ChakraProvider>
		
	);
}

export default App;
