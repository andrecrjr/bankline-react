import React from "react";
import { UsersContainer } from "./ListUsers";
import "./styles/main.scss";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <UsersContainer />
    </BrowserRouter>
  );
}
