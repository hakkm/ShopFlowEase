import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import DrawerCart from "./DrawerCart";
import List from "@mui/material/List";
import ShopButton from "./ShopButton";
import { Typography } from "@mui/material";
import { useState } from "react";

export default function AppDrawer({ carts, onCartsChange }) {
  const [state, setState] = useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(!state);
  };
  const orderredCarts = carts.filter((cart) => cart.orders);
  const list = (
    <>
      <Box
        role="presentation"
        // onClick={toggleDrawer()}
        onKeyDown={toggleDrawer()}
        textAlign="center"
      >
        <Typography m={1} variant="h6" component="p">
          Orders
        </Typography>
        <List>
          {orderredCarts.map((cart, index) => (
            <DrawerCart
              key={index}
              cart={cart}
              carts={carts}
              onCartsChange={onCartsChange}
            />
          ))}
        </List>
      </Box>
    </>
  );

  return (
    <>
      <ShopButton carts={carts} toggleDrawer={toggleDrawer} />
      <Drawer
        anchor={"right"}
        open={state}
        onClose={toggleDrawer("right", false)}
        // onOpen={toggleDrawer("right", true)}
      >
        {list}
      </Drawer>
    </>
  );
}
