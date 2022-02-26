import { DataGrid } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import SimpleDialog from "@mui/material/Dialog";
import "./Beers.css";

const Beers = (props) => {
  const dispatch = useDispatch();

  // Set DataGrid columns
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
  // Init DataGrid Row
  let rows = [];

  // Add each beer from Store to Row
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

  // Dispatch beer data from selected row to store
  const moreInfo = (idMoreInfo) => {
    props.beers.forEach((beer) => {
      let id = beer.id;

      if (id === idMoreInfo) {
        const moreInfoData = {
          description: beer.description,
          image_url: beer.image_url,
        };

        dispatch({ type: "MORE_INFO_MODAL", payload: moreInfoData });
        console.log("object");

        open();
      }
    });
  };

  const promptMoreInfo = (e) => {
    console.log("Messages");
  };

  //

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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default Beers;
