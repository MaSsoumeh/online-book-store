import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EastIcon from "@mui/icons-material/East";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import { Divider, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantityToCart,
  decrementCart,
  incrementCart,
  removeFromCart,
  totalCost,
} from "../redux/cart.slice.ts";
import { theme } from "../styles/theme";
import NumberInput from "./NumberInput";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    opacity: "0.5",
    color: theme.palette.primary.light,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: theme.palette.primary.main,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  backgroundColor: theme.palette.primary.light,

  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const maxQuantity = useSelector((state) => state.cart.max);
  const orderedBooks = useSelector((state) => state.cart.items);
  const NumberOfItems = useSelector((state) => state.cart.totalItems);
  const totalPrice = useSelector((state) => state.cart.totalCost);
  const dispatch = useDispatch();

  useEffect(() => {
    if (NumberOfItems > 0) {
      const priceList = orderedBooks.map((item) => item.price * item.quantity);
      const totalPrice = priceList.reduce((total, num) => (total += num));
      dispatch(totalCost(totalPrice.toFixed(2)));
    }
  }, [NumberOfItems]);

  function createRows() {
    if (orderedBooks?.length === 0) {
      return [];
    }
    return orderedBooks?.map((item) => {
      const { image, author, book, quantity, price, id } = item;
      return {
        name: <Image src={image} alt={book} width="65px" height="90px" />,
        details: (
          <Box>
            <Typography
              sx={{
                mb: "4px",
                color: theme.palette.primary.main,
              }}
            >
              {book}
            </Typography>
            <Typography sx={{ color: theme.palette.grey[700] }}>
              By: {author}
            </Typography>
          </Box>
        ),
        quantity: (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "40%",
            }}
          >
            <IconButton
              onClick={() => {
                if (quantity < maxQuantity) dispatch(incrementCart({ id }));
              }}
            >
              <AddBoxOutlinedIcon sx={{ width: "25px", height: "25px" }} />
            </IconButton>
            <NumberInput
              inputWidth="60px"
              inputHeight="40px"
              defaultValue={quantity}
              max={maxQuantity}
              onChangeHandler={(value) => {
                dispatch(addQuantityToCart({ quantity: value, id }));
              }}
              // readOnly={true}
            />
            <IconButton
              onClick={() => {
                if (quantity > 0) {
                  dispatch(decrementCart({ id }));
                }
              }}
            >
              {quantity === 1 ? (
                <DeleteForeverOutlinedIcon sx={{ color: "tomato" }} />
              ) : (
                <IndeterminateCheckBoxOutlinedIcon />
              )}
            </IconButton>
          </Box>
        ),
        price,
        totalPrice: (price * quantity).toFixed(2),
        delete:
          quantity === 1 ? (
            <div style={{ width: "53.35px" }}></div>
          ) : (
            <IconButton onClick={() => dispatch(removeFromCart({ id }))}>
              <DeleteForeverOutlinedIcon sx={{ color: "tomato" }} />
            </IconButton>
          ),
      };
    });
  }
  const rows = createRows();
  return rows?.length > 0 ? (
    <>
      <TableContainer sx={{ paddingX: "24px" }}>
        <Table sx={{ minWidth: 600 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ borderTopLeftRadius: "10px" }}>
                Book
              </StyledTableCell>
              <StyledTableCell align="left">Details</StyledTableCell>
              <StyledTableCell align="left">Quantity</StyledTableCell>
              <StyledTableCell align="left">Price</StyledTableCell>
              <StyledTableCell align="left">Total Price</StyledTableCell>
              <StyledTableCell
                align="left"
                sx={{ borderTopRightRadius: "10px" }}
              >
                Delete All
              </StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={`${row.id}-${index}`}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.details}</StyledTableCell>
                <StyledTableCell align="center">{row.quantity}</StyledTableCell>
                <StyledTableCell align="left">{row.price} $</StyledTableCell>
                <StyledTableCell align="left">
                  {row.totalPrice} $
                </StyledTableCell>
                <StyledTableCell align="left">{row.delete}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          margin: "10px 24px",
          padding: "16px 24px",
          background: theme.palette.primary.light,
          border: `2px solid ${theme.palette.secondary.main}`,
        }}
      >
        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "flex-start",
            gap: "10%",
            minWidth: "540px",
          }}
        >
          <div>
            <Typography sx={{ color: theme.palette.primary.main }}>
              Items
            </Typography>
            <Divider sx={{ mb: "24px" }} />
            <Typography
              sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
            >
              {NumberOfItems}
            </Typography>
          </div>
          <div>
            <Typography sx={{ color: theme.palette.primary.main }}>
              Shipping
            </Typography>
            <Divider sx={{ mb: "24px" }} />
            <Typography
              sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
            >
              Free
            </Typography>
          </div>
          <div>
            <Typography sx={{ color: theme.palette.primary.main }}>
              Total cost
            </Typography>
            <Divider sx={{ mb: "24px" }} />
            <Typography
              sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
            >
              {totalPrice} $
            </Typography>
          </div>
          <Button
            sx={{
              color: theme.palette.primary.dark,
              borderRadius: "40px",
              ":hover": {
                fontWeight: "bold",
                background: "transparent",
              },
            }}
            endIcon={<EastIcon />}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </>
  ) : (
    <div style={{ textAlign: "center" }}>
      <Typography
        sx={{ color: theme.palette.primary.main, textAlign: "center" }}
      >
        There is no item in your cart
      </Typography>
      <HighlightOffOutlinedIcon sx={{ color: "tomato" }} />
    </div>
  );
}
