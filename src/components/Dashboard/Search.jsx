import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

const Search = () => {
  const dispatch = useDispatch();
  const [food, setFood] = useState();

  const getBeerFromFood = async () => {
    // Clear Store
    dispatch({ type: "CLEAR", payload: [] });

    await axios
      .get(`https://api.punkapi.com/v2/beers?food=${food}`)
      .then((response) => {
        // Send Data from API to store
        const beers = response.data;
        beers.forEach((beer) => {
          dispatch({ type: "ADD", payload: beer });
        });
      });
  };

  const getInput = (e) => {
    setFood(e.target.value);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div onInput={getInput}>
          <TextField
            id="outlined-basic"
            label="Enter Food"
            variant="outlined"
          />
        </div>
        <div onClick={getBeerFromFood}>
          <Button variant="contained">Search by Food Pairing</Button>
        </div>
      </Box>
    </>
  );
};

export default Search;
