import React from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/Routes";

export const App = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};
