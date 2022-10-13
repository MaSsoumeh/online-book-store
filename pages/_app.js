import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import store from "../redux/store";
import "../styles/globals.css";
import { theme } from "../styles/theme";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default MyApp;
