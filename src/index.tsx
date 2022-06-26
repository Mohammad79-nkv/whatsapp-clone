import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactContextprider from "./Context/ContactContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContactContextprider>
      <App />
    </ContactContextprider>
  </React.StrictMode>
);
