import { StrictMode } from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import "./styles.css"
import { BrowserRouter } from "react-router-dom";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <StrictMode>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    </StrictMode>
)