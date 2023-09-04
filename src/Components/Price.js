import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Price() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "nowrap",
      }}
    >
      <TextField
        size="small"
        label="Min Price"
        type="number"
        variant="outlined"
        style={{ width: "100px" }}
      />
      <TextField
        size="small"
        label="Max Price"
        type="number"
        variant="outlined"
        style={{ width: "100px" }}
      />
      <Button
        sx={{ flexShrink: 1 }}
        variant="rounded"
        color="primary"
        size="small"
      >
        Ok
      </Button>
    </Box>
  );
}
