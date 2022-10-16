import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import { theme } from "../styles/theme";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import { incrementCart } from "../redux/cart.slice";
import { useAppDispatch, useAppSelector } from "../customHooks/hooks";

export default function BookCard({ book }) {
  const { image, book: name, author, category, price, id } = book;
  const route = useRouter();
  const dispatch = useAppDispatch();
  const maxQuantity = useAppSelector((state) => state.cart.max);
  const orderedBooks = useAppSelector((state) => state.cart.items);
  function addItemToCart() {
    if (!orderedBooks.length) {
      dispatch(incrementCart(book));
    } else {
      const selectedBook = orderedBooks.find((item) => item.id === id);
      if (selectedBook) {
        selectedBook.quantity < maxQuantity && dispatch(incrementCart(book));
      } else {
        dispatch(incrementCart(book));
      }
    }
  }
  return (
    <Card sx={styles.card} variant="outlined">
      {!route.query.category && (
        <Typography sx={styles.category}>{category}</Typography>
      )}
      <Box sx={{ width: "100%" }}>
        <Image width="200" height="200" src={image} alt={name} />
      </Box>
      <Box sx={{ paddingX: 2 }}>
        <Typography
          variant="body2"
          color={theme.palette.primary.main}
          sx={{ mb: 1 }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {author}
        </Typography>
      </Box>
      <Box sx={styles.actionSection}>
        <Box sx={styles.actionBox}>
          <Typography color={theme.palette.primary.light}>{price} $</Typography>
          <Button
            size="large"
            sx={{ color: theme.palette.secondary.main }}
            onClick={addItemToCart}
          >
            <Tooltip
              title="Add"
              sx={{ backgroundColor: theme.palette.common.white }}
            >
              <AddShoppingCartIcon
                sx={{
                  color: theme.palette.secondary.main,
                  "&:hover": { color: "lightGreen" },
                }}
              />
            </Tooltip>
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
const styles = {
  card: {
    minWidth: 200,
    minHeight: 350,
    maxWidth: 200,
    maxHeight: "auto",
    position: "relative",
  },
  category: {
    color: theme.palette.primary.light,
    background: theme.palette.primary.dark,
    opacity: "0.5",
    textAlign: "center",
  },
  actionSection: { position: "absolute", bottom: 0, right: 0, left: 0 },
  actionBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: theme.palette.primary.dark,
    paddingLeft: 2,
  },
};
