import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/MainPage";
import Login from "./pages/LoginPage";
import Navigation from "./components/Navigation";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
