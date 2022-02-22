import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Random from "./Random";

const Options = () => {
  return (
    <div className="options">
      <Stack spacing={2} direction="row">
        <Button variant="contained">
          <Random />
        </Button>
        <Button variant="contained">Search by Food Pairing</Button>
        <Button variant="contained">Search by Description</Button>
      </Stack>
    </div>
  );
};

export default Options;
