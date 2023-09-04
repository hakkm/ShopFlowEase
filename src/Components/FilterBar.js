import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Price from "./Price";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export default function FilterBar() {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" my={1} separator="›">
        <Link
          underline="hover"
          color="inherit"
          // href="/"
        >
          ShopFlowEase
        </Link>
        <Typography color="text.primary">Graphic Tablet</Typography>
      </Breadcrumbs>

      {/* <Typography color="grey" sx={{ my: 2 }}>
        ShopFlowEase {">"}{" "}
        <span style={{ fontWeight: "bold" }}>"Graphic Tablet"</span>
      </Typography> */}
      {/* Price */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "center",
        }}
      >
        <Typography>Price:</Typography>
        <Price />

        <Typography sx={{ ml: 1 }}>Order by:</Typography>
        <ButtonGroup
          sx={{ ml: 1 }}
          color="secondary"
          variant="outlined"
          aria-label="outlined button group"
        >
          <Button>Price</Button>
          <Button>Orders</Button>
        </ButtonGroup>
      </Box>
    </>
  );
}
