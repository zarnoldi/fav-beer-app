import { useSelector } from "react-redux";
import "./Dashboard.css";
import Beers from "../Beers/Beers";
import Options from "./Options";
import MoreInfo from "./MoreInfo";

const Dashboard = () => {
  const beerData = useSelector((state) => state);

  return (
    <>
      <div className="containerCol">
        <div className="container">
          <Options />
        </div>
        <div className="container">
          <MoreInfo moreInfoData={beerData.moreInfoData} />
        </div>
      </div>
      <Beers beers={beerData.beers} />
    </>
  );
};

export default Dashboard;
