import React from "react";

import Footer from "./Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Welcome from "./Welcome";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "../NavBar";

export const KEY_USER = `Logged in user`;

const Main = () => {
  const savedUser = localStorage.getItem(KEY_USER);
  const [user, setUser] = useState(savedUser);
  // alert(`user: ${user}`)
  return (
    <div style={{ width: "100%", bottom: "0" }}>
      <div style={{ alignContent: "left" }}></div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/Home"
            element={
              user !== null ? (
                <Home user={user} setUser={setUser} />
              ) : (
                <Login setUser={setUser} />
              )
            }
          />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
        </Routes>
      </Router>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Main;
