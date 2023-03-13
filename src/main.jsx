import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./main.css";
import { ChakraProvider } from "@chakra-ui/react";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	// Aquí debe ir el SDK de su aplicación
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
	<ChakraProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ChakraProvider>
);
