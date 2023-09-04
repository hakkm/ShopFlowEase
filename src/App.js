import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CARTS from "./assets/CARTS";
import Carts from "./Components/Carts";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./Components/Footer";
import FilterBar from "./Components/FilterBar";
import Grid from "@mui/material/Grid";
import Header from "./Components/Header";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import ShopIcon from "@mui/icons-material/Shop";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { BRANDS_IMGS } from "./assets/CARTS";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

const BRANDS = Object.keys(BRANDS_IMGS);
const theme = createTheme({
  palette: {
    primary: {
      main: "#a6ff03",
    },
  },
});

export default function App() {
  const [numCarts, setNumCarts] = useState(0);
  const [eachCartOrder, setEachCartOrder] = useState(() => {
    const eachCartOrder = [];
    CARTS.map((cart) => eachCartOrder.push({ id: cart.id, orders: 0 }));
    return eachCartOrder;
  });
  console.log(eachCartOrder);
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#F2F2F2",
        }}
      >
        <CssBaseline />
        <Header numCarts={numCarts} />
        <main>
          <Box
            sx={{
              display: "flex",
            }}
          >
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
            <Container maxWidth="lg" sx={{ m: 3 }}>
              <FilterBar />
              <Carts
                CARTS={CARTS}
                onAddCart={setNumCarts}
                numCarts={numCarts}
                eachCartOrder={eachCartOrder}
                onAddEachCartOrder={setEachCartOrder}
              />
            </Container>
          </Box>
        </main>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
