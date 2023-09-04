import AppDrawer from "./AppDrawer";
import AppBar from "@mui/material/AppBar";
import ShopIcon from "@mui/icons-material/Shop";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header({ numCarts, carts, onCartsChange }) {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <ShopIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          ShopFlowEase
        </Typography>
        <AppDrawer
          numCarts={numCarts}
          carts={carts}
          onCartsChange={onCartsChange}
        />
      </Toolbar>
    </AppBar>
  );
}
