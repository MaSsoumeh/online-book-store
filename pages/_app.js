import { ThemeProvider } from "@mui/material/styles";
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
        <div
          style={{
            position: "relative",
            top: "70px",
            marginBottom: "200px",
          }}
        >
          <Component {...pageProps} />
        </div>
        <Footer />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
