import Paper from "@mui/material/Paper";
import Cart from "./Cart";

export default function Carts({
  carts,
  onCartsChange,
  minMax,
  sort,
  SORT_MAP,
}) {
  function priceFilter(price) {
    const [min, max] = minMax;
    return (min === "" || min <= price) && (max === "" || price <= max);
  }

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
      {carts
        .filter((cart) => priceFilter(cart.price))
        .sort(SORT_MAP[sort])
        .map((cart) => (
          <Cart
            key={cart.id}
            id={cart.id}
            carts={carts}
            onCartsChange={onCartsChange}
            src={"img-" + cart.id + ".webp"}
            description={cart.description}
            stars={cart.stars}
            reviews={cart.reviews}
            sold={cart.sold}
            price={cart.price}
            brand={cart.brand}
          />
        ))}
    </Paper>
  );
}
