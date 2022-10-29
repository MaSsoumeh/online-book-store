import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import store from "../redux/store.ts";
import "../styles/globals.css";
import { theme } from "../styles/theme";
import { Provider } from "react-redux";
import { SearchVisibilityProvider } from "../context/SearchVisibility";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <SearchVisibilityProvider>
        <Provider store={store}>
          <Navbar />
          <Box
            sx={{
              position: "relative",
              top: { xs: "57px", sm: "65px", md: "69px" },
              marginBottom: "200px",
            }}
          >
            <Component {...pageProps} />
          </Box>
          <Footer />
        </Provider>
      </SearchVisibilityProvider>
    </ThemeProvider>
  );
}

export default MyApp;
