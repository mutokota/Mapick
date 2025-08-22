import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home";
import "../css/app.css";

const container = document.getElementById("app");
if (!container) throw new Error("#app not found");
const root = createRoot(container);
root.render(
    <StrictMode>
        <Home />
    </StrictMode>
);
