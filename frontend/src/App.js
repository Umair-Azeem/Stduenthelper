import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import Authentication from "./screens/authentication/Authentication";

function App() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Authentication />
      </div>
    </div>
  );
}

export default App;
