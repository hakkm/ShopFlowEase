import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Paper from "@mui/material/Paper";
import { Typography, IconButton } from "@mui/material";

export default function DrawerCart({ cart, carts, onCartsChange }) {
  console.log(carts);
  const [floorPartPrice, decimalPartPrice] = cart.price.toString().split(".");

  const handleClick = (operator) => (event) => {
    const newCarts = carts.map((cartItem) => {
      if (cart.id === cartItem.id)
        return {
          ...cart,
          orders: cart.orders
            ? operator === "+"
              ? cart.orders + 1
              : cart.orders - 1
            : 1,
        };
      return cartItem;
    });
    onCartsChange(newCarts);
  };

  return (
    <ListItem key={"fuck you"} disablePadding>
      <Paper
        sx={{
          display: "flex",
          backgroundColor: "#fff",
        }}
        elevation={3}
      >
        {/* Cart */}
        <Box
          sx={{
            ml: 1,
            mt: 1,
          }}
        >
          <img
            src={require(`../assets/imgs/img-${cart.id}.webp`)}
            alt="order"
            loading="lazy"
            width="70"
            height="70"
          />
        </Box>
        <Box
          sx={{
            mx: 1,
          }}
        >
          <Typography variant="subtitle1" color="gray" component="p">
            {cart.description.slice(0, 35) + "..."}
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ flexGrow: 1 }} my={1} variant="h6" component="p">
              US ${floorPartPrice}.
              <span style={{ fontSize: "14px" }}>{decimalPartPrice}</span>
            </Typography>
            <IconButton onClick={handleClick("-")} color="primary">
              <RemoveCircleIcon />
            </IconButton>
            <p>{cart.orders}</p>
            <IconButton onClick={handleClick("+")} color="primary">
              <AddCircleIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}></Box>
        </Box>
      </Paper>
    </ListItem>
  );
}
