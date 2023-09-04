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
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import ShopIcon from "@mui/icons-material/Shop";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Header({ numCarts }) {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <ShopIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          ShopFlowEase
        </Typography>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={numCarts} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
