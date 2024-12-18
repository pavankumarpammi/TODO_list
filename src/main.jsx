import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <h1 style={{ color: 'blue', fontSize: '42px', textAlign: 'center' }}>TODO List</h1>
        <App />
    </React.StrictMode>
);
