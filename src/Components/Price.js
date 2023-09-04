import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import IconButton from "@mui/material/IconButton";

export default function Price({ minMax, onMinMaxChange }) {
  function handlePriceFilter(e) {
    e.preventDefault();
    onMinMaxChange([e.target.min.value, e.target.max.value]);
  }
  return (
    <form onSubmit={handlePriceFilter}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "nowrap",
        }}
      >
        <TextField
          name="min"
          size="small"
          label="Min Price"
          type="number"
          variant="outlined"
          style={{ width: "100px" }}
        />
        <TextField
          name="max"
          size="small"
          label="Max Price"
          type="number"
          variant="outlined"
          style={{ width: "100px" }}
        />
        <IconButton color="primary" aria-label="add an alarm" type="submit">
          <FilterAltIcon />
        </IconButton>
      </Box>
    </form>
  );
}
