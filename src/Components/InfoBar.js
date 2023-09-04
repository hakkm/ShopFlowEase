import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function InfoBar({ sort, onSortChange }) {
  const handleChange = (event) => {
    onSortChange(event.target.value);
  };
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Breadcrumbs aria-label="breadcrumb" my={1} separator="›" flexGrow={1}>
        <Link
          underline="hover"
          color="inherit"
          // href="/"
        >
          ShopFlowEase
        </Link>
        <Typography color="text.primary">Graphic Tablet</Typography>
      </Breadcrumbs>

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Sort By</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={sort}
          label="Sort By"
          onChange={handleChange}
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          <MenuItem value="PriceLH">Price: Low to Hight</MenuItem>
          <MenuItem value="PriceHL">Price: Hight to Low</MenuItem>
          <MenuItem value="BestSeller">Best Sellers</MenuItem>
          <MenuItem value="Review">Avg. Customer Review</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
