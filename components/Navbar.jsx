import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import BookIcon from "@mui/icons-material/AutoStoriesSharp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";
import { Badge, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { totalItems } from "../redux/cart.slice";

const pages = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/shop" },
  { title: "Cart", link: "/cart" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const cartItems = useSelector((state) => state.cart.items);
  const numberOfCartItems = useSelector((state) => state.cart.totalItems);
  const cartQuantity =
    cartItems?.length && cartItems?.map((item) => item.quantity);
  if (cartQuantity.length > 0) {
    const total = cartQuantity.reduce((total, num) => (total += num));
    dispatch(totalItems(total));
  } else {
    dispatch(totalItems(0));
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: theme.palette.primary.main }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BookIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: theme.palette.secondary.main,
            }}
          />
          <Link href="/">
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: theme.palette.secondary.main,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              BookLine
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: theme.palette.primary.light }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Link href={page.link}>
                    <Typography
                      textAlign="center"
                      sx={{ color: theme.palette.primary.main }}
                    >
                      {page.title}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <BookIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              color: theme.palette.secondary.main,
            }}
          />
          <Link href="/">
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: theme.palette.secondary.main,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              BookLine
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link href={page.link} key={page.title}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: theme.palette.primary.light,
                    display: "block",
                  }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>
          <Link href="/cart">
            <IconButton
              sx={{ p: 0, width: "1em", height: "1em" }}
              aria-label="cart"
            >
              <Badge
                sx={{ width: "1em", height: "1em" }}
                badgeContent={numberOfCartItems}
                color="secondary"
              >
                <ShoppingCartOutlinedIcon
                  sx={{
                    mr: 4,
                    color: theme.palette.primary.light,
                    "&:hover": {
                      transform: "scale(1.2)",
                      transition:
                        "all 1s cubic-bezier(0.14, 0.96, 0.91, 0.6) 0s",
                    },
                  }}
                />
              </Badge>
            </IconButton>
          </Link>

          <Box sx={{ flexGrow: 0, marginLeft: "2rem" }}>
            <Tooltip title="Open Setting">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Masoumeh Zarei" sx={{ width: 30, height: 30 }} />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    sx={{ color: theme.palette.primary.main }}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
