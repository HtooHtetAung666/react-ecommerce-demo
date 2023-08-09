import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Shop } from './pages/Shop'
import { Cart } from './pages/Cart'
import { ShopContextProvider } from "./context/ShopContext";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />}/>
            <Route path="/cart" element={<Cart />}/>
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
