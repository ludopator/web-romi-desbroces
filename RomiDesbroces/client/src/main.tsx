import { createRoot } from "react-dom/client";
// 💡 CAMBIO: Usamos BrowserRouter en lugar de HashRouter
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  // 💡 USAMOS BrowserRouter.
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
