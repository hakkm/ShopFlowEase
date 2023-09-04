import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Paper from "@mui/material/Paper";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography, IconButton } from "@mui/material";
import { useState } from "react";
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

export default function AppDrawer({ numCarts }) {
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

  const listItem = (
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
            src="https://picsum.photos/200/300"
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
            Fuck you prodoct to make the shit bigger
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ flexGrow: 1 }} my={1} variant="h6" component="p">
              US ${12}.<span style={{ fontSize: "14px" }}>{15}</span>
            </Typography>
            <IconButton color="success">
              <RemoveCircleIcon />
            </IconButton>
            <p>1</p>
            <IconButton color="success">
              <AddCircleIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}></Box>
        </Box>
      </Paper>
    </ListItem>
  );

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
          {listItem}
          {listItem}
          {listItem}
        </List>
      </Box>
    </>
  );

  return (
    <>
      <Button color="secondary" onClick={toggleDrawer()}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={numCarts} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Button>
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
