import { DataGrid } from "@mui/x-data-grid";
import "./Beers.css";

const Beers = (props) => {
  console.log(props.beers.id);

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

  const rows = [
    {
      id: props.beers.id,
      name: props.beers.name,
      first_brewed: props.beers.first_brewed,
      food_pairing: props.beers.food_pairing,
      description: props.beers.description,
    },
  ];

  return (
    <>
      <div className="containercc">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  );
};
export default Beers;
