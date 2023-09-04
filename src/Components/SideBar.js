import Box from "@mui/material/Box";
import FilterBar from "./FilterBar";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { BRANDS_IMGS } from "../assets/CARTS";

const BRANDS = Object.keys(BRANDS_IMGS);

export default function SideBar({
  minMax,
  onMinMaxChange,
  brands,
  onBrandChange,
}) {
  // if brand in brands remove it else add it
  function handleChange(event) {
    const brand = event.target.value;

    let newBrands = brands.slice();
    const index = brands.indexOf(brand);
    if (index !== -1) {
      // If the brand is in the list, remove it
      newBrands.splice(index, 1);
    } else {
      // If the brand is not in the list, add it
      newBrands.push(brand);
    }
    onBrandChange(newBrands);
  }
  return (
    <Box sx={{ width: 230, pl: 2, backgroundColor: "white" }}>
      <Box id="brands" sx={{ py: 3 }}>
        <Typography
          sx={{ fontWeight: "bold" }}
          variant="subtitle1"
          component="h3"
        >
          Brands
        </Typography>

        <FormGroup>
          {BRANDS.map((brand) => (
            <Typography color="gray" key={brand} variant="body2" component="p">
              <FormControlLabel
                control={
                  <Checkbox sx={{ m: 0, p: 0 }} onChange={handleChange} />
                }
                label={brand}
                key={brand}
                value={brand}
                name="brand"
                color="gray"
                sx={{ ml: 1, p: 0 }}
              />
            </Typography>
          ))}
        </FormGroup>
        <FilterBar minMax={minMax} onMinMaxChange={onMinMaxChange} />
      </Box>
    </Box>
  );
}
