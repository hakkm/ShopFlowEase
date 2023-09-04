import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CARTS from "./assets/CARTS";
import Carts from "./Components/Carts";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./Components/Footer";
import FilterBar from "./Components/FilterBar";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#366f03",
    },
  },
});

export default function App() {
  const [carts, setCarts] = useState(CARTS);
  const [numCarts, setNumCarts] = useState(0);
  const [eachCartOrder, setEachCartOrder] = useState(() => {
    const eachCartOrder = [];
    CARTS.map((cart) => eachCartOrder.push({ id: cart.id, orders: 0 }));
    return eachCartOrder;
  });

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
        {/* main */}
        <Box
          sx={{
            display: "flex",
          }}
        >
          <SideBar />
          <Container maxWidth="lg" sx={{ m: 3 }}>
            <FilterBar />
            <Carts
              carts={carts}
              onCartsChange={setCarts}
              CARTS={CARTS}
              onAddCart={setNumCarts}
              numCarts={numCarts}
              eachCartOrder={eachCartOrder}
              onAddEachCartOrder={setEachCartOrder}
            />
          </Container>
        </Box>
        {/* footer */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
