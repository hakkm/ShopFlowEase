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
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./Components/Footer";
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
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { BRANDS_IMGS } from "./assets/CARTS";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

const BRANDS = Object.keys(BRANDS_IMGS);
const theme = createTheme({
  palette: {
    primary: {
      main: "#a6ff03",
    },
  },
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function AddCartButton() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}

function Carts() {
  return (
    <Paper
      sx={{
        minwdith: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        mt: 1,
      }}
    >
      <Cart />
      <Cart />
      <Cart />
    </Paper>
  );
}

function Cart() {
  return (
    <Paper
      sx={{
        minwdith: "100vh",
        display: "flex",
        backgroundColor: "#fff",
        mt: 1,
      }}
    >
      {/* Cart */}
      <Box
        sx={{
          my: 2,
          ml: 2,
        }}
      >
        <img
          src="https://picsum.photos/200/300"
          srcSet="https://picsum.photos/200/300"
          alt="Todo"
          loading="lazy"
          width="180"
          height="180"
        />
      </Box>
      <Box
        sx={{
          m: 1,
        }}
      >
        <Typography mt={1} variant="body2" component="p">
          Some Fucking Description Here It should Be a little longe in order to
          look very beautiful and consistent
        </Typography>
        <Typography variant="body2" component="p">
          239 sold
        </Typography>
        <Typography my={1} variant="h6" component="p">
          US $20.<span style={{ fontSize: "14px" }}>18</span>
        </Typography>
        <Rating name="read-only" value={4.9} readOnly />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button my={3} variant="contained" color="primary">
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

function Price() {
  return (
    <Box
      sx={{
        alignItems: "center",
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
      <Button flexShrink={1} variant="rounded" color="primary" size="small">
        Ok
      </Button>
    </Box>
  );
}

export default function App() {
  console.log("hakim");
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
        <Header />
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
            <Container maxWidth="md" sx={{ m: 3 }}>
              <Typography color="grey" sx={{ my: 2 }}>
                ShopFlowEase {">"}{" "}
                <span style={{ fontWeight: "bold" }}>"Graphic Tablet"</span>
              </Typography>
              {/* Price */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
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
              {/* Carts */}
              <Carts />
            </Container>
          </Box>
        </main>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
