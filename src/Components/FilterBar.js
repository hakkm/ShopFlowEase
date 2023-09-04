import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Price from "./Price";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

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

      {/* <Typography
        sx={{ mt: 1, fontWeight: "bold" }}
        variant="subtitle1"
        component="h3"
      >
        Order by
      </Typography>
      <ButtonGroup
        sx={{ ml: 1 }}
        color="secondary"
        variant="outlined"
        aria-label="outlined button group"
      >
        <Box>
          <Link onClick={(e) => console.log("clicked")}>
            <Typography
              color="gray"
              variant="body2"
              component="p"
              sx={{ m: 0 }}
            >
              Price
            </Typography>
          </Link>
          <Link onClick={(e) => console.log("clicked")}>
            <Typography
              color="gray"
              variant="body2"
              component="p"
              sx={{ m: 0 }}
            >
              Orders
            </Typography>
          </Link>
        </Box>
      </ButtonGroup> */}
      {/* </Box> */}
    </>
  );
}
