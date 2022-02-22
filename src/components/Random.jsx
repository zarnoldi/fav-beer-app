import axios from "axios";
import { useDispatch } from "react-redux";

const Random = () => {
  const dispatch = useDispatch();

  const getRandomBeer = async () => {
    await axios
      .get("https://api.punkapi.com/v2/beers/random")
      .then((response) => {
        const beer = response.data;
        dispatch({ type: "ADD", payload: beer[0] });
      });
  };

  return (
    <div>
      <p onClick={getRandomBeer}>Get Random Beer</p>
    </div>
  );
};

export default Random;
