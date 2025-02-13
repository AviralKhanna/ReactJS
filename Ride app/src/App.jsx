import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, Login, Signup, CreateRide, BookRide } from "./pages";
import Navbar from "./components/Navbar";
import "./app.css"; 

const App = () => {
  const location = useLocation();
  
  // Define paths where the Navbar should be hidden
  const hideNavbarPaths = ["/login", "/signup", "/create-ride", "/book-ride"];

  return (
    <>
      {/* Show Navbar only if the current route is not in hideNavbarPaths */}
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-ride" element={<CreateRide />} />
        <Route path="/book-ride" element={<BookRide />} />
      </Routes>
    </>
  );
};

export default App;
