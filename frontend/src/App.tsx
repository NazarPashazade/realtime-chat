import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
import { Chat } from "./pages/Chat";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/chat" element={<Chat/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
