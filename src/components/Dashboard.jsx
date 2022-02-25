import { useSelector } from "react-redux";
import Beers from "./Beers/Beers";
import Options from "./Options";

const Dashboard = () => {
  const beerData = useSelector((state) => state);

  return (
    <>
      <div className="container">
        <Options />
      </div>
      <Beers beers={beerData.beers} />
    </>
  );
};

export default Dashboard;
