import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { BRANDS_IMGS } from "../assets/CARTS";

const BRANDS = Object.keys(BRANDS_IMGS);

export default function SideBar() {
  return (
    <Box sx={{ width: 192, px: 2, backgroundColor: "white" }}>
      <Box id="brands" sx={{ py: 3 }}>
        <Typography variant="subtitle1" component="h3">
          Brands
        </Typography>

        <Stack sx={{ pl: 2, mt: 1 }}>
          {BRANDS.map((brand) => (
            <Typography
              color="gray"
              key={brand}
              variant="body2"
              component="p"
              sx={{ m: 0 }}
            >
              {brand}
            </Typography>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
