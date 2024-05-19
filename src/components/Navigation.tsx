// src/components/Navigation.js

import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex justify-between px-8 py-5 border-b border-gray-200">
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* TODO: login, signUp 조건부 추가 필요 */}
        <li>
          <Link to="/product">Product</Link>
        </li>
      </ul>
      <ul className="flex gap-4 text-sm">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
