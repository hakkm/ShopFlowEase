import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CARTS from "./assets/CARTS";
import Carts from "./Components/Carts";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import InfoBar from "./Components/InfoBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const SORT_MAP = {
  None: () => 1,
  PriceLH: (a, b) => a.price - b.price,
  PriceHL: (a, b) => b.price - a.price,
  BestSeller: (a, b) => b.sold - a.sold,
  Review: (a, b) => b.stars - a.stars,
};

export default function App() {
  const [carts, setCarts] = useState(CARTS);
  const [minMax, setMinMax] = useState(["", ""]);
  const [sort, setSort] = useState("None");
  const [brands, setBrands] = useState([]);

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
        <Header carts={carts} onCartsChange={setCarts} />
        {/* main */}
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
          }}
        >
          <SideBar
            minMax={minMax}
            onMinMaxChange={setMinMax}
            brands={brands}
            onBrandChange={setBrands}
          />
          <Container maxWidth="lg" sx={{ m: 3 }}>
            <InfoBar sort={sort} onSortChange={setSort} />
            <Carts
              brands={brands}
              onBrandChange={setBrands}
              sort={sort}
              SORT_MAP={SORT_MAP}
              minMax={minMax}
              carts={carts}
              onCartsChange={setCarts}
            />
          </Container>
        </Box>
        {/* footer */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
