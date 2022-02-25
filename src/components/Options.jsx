import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Random from "./Random";
import Search from "./Search";

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
      </Stack>
    </div>
  );
};

export default Options;
