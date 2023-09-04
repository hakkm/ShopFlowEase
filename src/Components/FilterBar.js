import Price from "./Price";
import Typography from "@mui/material/Typography";

export default function FilterBar({ minMax, onMinMaxChange }) {
  return (
    <>
      <Typography
        sx={{ mt: 1, fontWeight: "bold" }}
        variant="subtitle1"
        component="h3"
      >
        Price
      </Typography>
      <Price minMax={minMax} onMinMaxChange={onMinMaxChange} />
    </>
  );
}
