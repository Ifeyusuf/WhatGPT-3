import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Studies from "./pages/Gpt";
import Open from "./pages/Open";
import Library from "./pages/Studies";
import Gpt from "./pages/Library";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Gpt' element={<Gpt/>}/>
      <Route path='Open' element={<Open/>}/>
      <Route path='Studies' element={<Studies/>}/>
      <Route path='Library' element={<Library/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
