import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  // State
  const [beers, setBeers] = useState();

  const getBeers = () => {
    axios.get("https://api.punkapi.com/v2/beers").then((response) => {
      const responseData = response.data;
      setBeers(responseData);
    });
  };

  // When component mounts getBeers
  useEffect(getBeers, []);

  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
}

export default App;
