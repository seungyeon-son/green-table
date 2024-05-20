import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Navigation from "./components/Navigation";
import Main from "./pages/MainPage";
import Login from "./pages/LoginPage";
import SignUp from "../src/pages/SignupPage";
import Product from "../src/pages/ProductPage";
import ProductDetail from "../src/pages/ProductDetailPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
