import Paper from "@mui/material/Paper";
import Cart from "./Cart";

export default function Carts({
  CARTS,
  onAddCart,
  numCarts,
  eachCartOrder,
  onAddEachCartOrder,
}) {
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
      {CARTS.map((cart) => (
        <Cart
          key={cart.id}
          id={cart.id}
          src={"img-" + cart.id + ".webp"}
          description={cart.description}
          stars={cart.stars}
          reviews={cart.reviews}
          sold={cart.sold}
          price={cart.price}
          brand={cart.brand}
          onAddCart={onAddCart}
          numCarts={numCarts}
          eachCartOrder={eachCartOrder}
          onAddEachCartOrder={onAddEachCartOrder}
        />
      ))}
    </Paper>
  );
}
