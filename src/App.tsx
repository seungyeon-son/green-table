import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Navigation from "./components/Navigation";
import Main from "./pages/MainPage";
import Login from "./pages/LoginPage";
import SignUp from "../src/pages/SignupPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
