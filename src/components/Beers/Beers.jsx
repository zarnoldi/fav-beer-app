import Beer from "./Beer";
import "./Beers.css";

const Beers = (props) => {
  let rows = [];

  props.beers.forEach((beer) => {
    let beerRow = {
      id: beer.id,
      name: beer.name,
      first_brewed: beer.first_brewed,
      food_pairing: beer.food_pairing,
      description: beer.description,
    };

    rows = rows.push(beerRow);
  });
  console.log(props.beers);
  return (
    <>
      {props.beers.forEach((beer) => {
        return (
          <div className="red" key={beer}>
            <h2>Beer</h2>
            <Beer
              id={beer.id}
              name={beer.name}
              first_brewed={beer.first_brewed}
              food_pairing={beer.food_pairing}
              description={beer.description}
            />
          </div>
        );
      })}
    </>
  );
};
export default Beers;
