import { DataGrid } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import "./Beers.css";

const Beers = (props) => {
  const dispatch = useDispatch();

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 250 },
    { field: "first_brewed", headerName: "First Brewed", width: 200 },
    { field: "food_pairing", headerName: "Food pairings", width: 600 },
    {
      field: "description",
      headerName: "Description",
      width: 600,
    },
  ];
  let rows = [];

  props.beers.forEach((beer) => {
    beer = {
      id: beer.id,
      name: beer.name,
      first_brewed: beer.first_brewed,
      food_pairing: beer.food_pairing,
      description: beer.description,
    };
    rows.push(beer);
  });

  const moreInfo = (idMoreInfo) => {
    props.beers.forEach((beer) => {
      let id = beer.id;

      if (id === idMoreInfo) {
        const moreInfoData = {
          description: beer.description,
          image_url: beer.image_url,
        };

        dispatch({ type: "MORE_INFO_MODAL", payload: moreInfoData });
      }
    });
  };

  return (
    <>
      <div className="containercc">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          api
          onCellDoubleClick={(e) => {
            moreInfo(e.id);
          }}
        />
      </div>
    </>
  );
};
export default Beers;
