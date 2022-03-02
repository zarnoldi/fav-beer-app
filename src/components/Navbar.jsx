import "./Navbar.css";
// import { useState } from "react";

const Navbar = () => {
  const setActive = (e) => {
    console.log(e.target);
  };

  return (
    <>
      <div className="topnav container">
        <div>
          <h1>Pair Food with Beers</h1>
        </div>
        <div className="menu container">
          <a onClick={setActive}>Home</a>
          <a onClick={setActive}>About</a>
          <a>Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
