import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function ShopButton({ toggleDrawer, carts }) {
  function calcNumCarts() {
    let numOrders = 0;
    // eslint-disable-next-line array-callback-return
    carts.map((cart) => {
      cart.orders && (numOrders = numOrders + cart.orders);
    });
    return numOrders;
  }
  return (
    <IconButton color="secondary" onClick={toggleDrawer()} aria-label="cart">
      <StyledBadge badgeContent={calcNumCarts()} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
