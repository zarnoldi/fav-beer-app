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

  return (
    <>
      {/* <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /> */}
    </>
  );
};

export default DataDisplay;
