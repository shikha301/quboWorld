import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Header from "./components/Header";
import Navbar from './components/Navbar';
// import Footer from "./components/Footer";

function App() {
  return  (
    <div>
      {/* <Header /> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
