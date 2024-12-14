import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Authendicaiton Module
import Register from "./Component/Authendication/Register";
import Login from "./Component/Authendication/Login";

// Route import
import Template from "./Component/Template";

export default function App() {
  return (
    <React.Fragment>

      <Router>
        <Routes>

          {/* Authendication */}
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>

          <Route path="/" element={<Template />}/>
        </Routes>
      </Router>

    </React.Fragment>
  );
}