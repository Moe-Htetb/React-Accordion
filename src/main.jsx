import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Faq from "./Faq.jsx";
import FaqQuestion from "./FaqQuestion.jsx";

createRoot(document.getElementById("root")).render(<FaqQuestion />);
