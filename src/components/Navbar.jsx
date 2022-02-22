import Search from "./Search";
import "./Navbar.css";
// import { useState } from "react";

const Navbar = () => {
  const setActive = (e) => {
    console.log(e.target);
  };

  return (
    <>
      <div className="topnav container">
        <div className="menu container">
          <a onClick={setActive}>Home</a>
          <a onClick={setActive}>About</a>
          <a>Contact</a>
        </div>
        <div>
          <h1>My Favorite Beers</h1>
        </div>
        <Search />
      </div>
    </>
  );
};

export default Navbar;
