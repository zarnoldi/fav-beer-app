import { DataGrid } from "@mui/x-data-grid";

const DataDisplay = () => {
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

  let rows = [
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
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </>
  );
};

export default DataDisplay;
