import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function Cart({
  id,
  src,
  carts,
  onCartsChange,
  description,
  stars,
  reviews,
  sold,
  price,
  brand,
}) {
  const [floorPartPrice, decimalPartPrice] = price.toString().split(".");
  function handleClick() {
    const newCarts = carts.map((cart) => {
      if (id === cart.id)
        return { ...cart, orders: cart.orders ? cart.orders + 1 : 1 };
      return cart;
    });
    onCartsChange(newCarts);
  }

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
          src={require(`../assets/imgs/${src}`)}
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
          {description}
        </Typography>
        <Typography mt={1} variant="body2" component="p">
          {sold} sold
        </Typography>
        <Typography my={1} variant="h6" component="p">
          US ${floorPartPrice}.
          <span style={{ fontSize: "14px" }}>{decimalPartPrice}</span>
        </Typography>
        <Rating
          precision={0.1}
          name="read-only"
          defaultValue={stars}
          value={stars}
          readOnly
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            my={3}
            variant="contained"
            color="primary"
            onClick={() => handleClick()}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
