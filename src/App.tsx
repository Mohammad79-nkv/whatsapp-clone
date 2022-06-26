import React, { useState } from "react";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import useLocalStorage from "./Hooks/useLocalStorage";

function App() {
  const [id, setId] = useLocalStorage("id", null);
  return (
    <div className="App">
      {!id ? <Login setId={setId} /> : <Dashboard id={id} />}
    </div>
  );
}

export default App;
