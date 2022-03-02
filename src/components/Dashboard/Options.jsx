import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Random from "./Random";
import Search from "./Search";
import Clear from "./Clear";

const Options = () => {
  return (
    <div className="options">
      <Stack spacing={10} direction="row">
        <Search />
        <div className="container">
          <Button variant="contained">
            <Random />
          </Button>
        </div>
        <div className="container">
          <Button variant="contained">
            <Clear />
          </Button>
        </div>
      </Stack>
    </div>
  );
};

export default Options;
