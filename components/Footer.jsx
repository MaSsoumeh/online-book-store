import { Typography, useTheme } from "@mui/material";
import { theme } from "../styles/theme";

const Footer = () => {
  const theme = useTheme();
  return (
    <footer style={styles.mainWrapper}>
      <Typography sx={{ fontFamily: "monospace", fontSize: 10 }}>
        Copyright <span>BookLine &copy;</span> {new Date().getFullYear()}
      </Typography>
      <Typography sx={{ fontFamily: "monospace", fontSize: 10 }}>
        Designed and developed with
        <span style={{ color: "red" }}> &hearts;</span> by Masoumeh Zarei
      </Typography>
    </footer>
  );
};

export default Footer;

const styles = {
  mainWrapper: {
    position: "fixed",
    bottom: 0,
    backgroundColor: theme.palette.primary.light,
    width: "100%",
    textAlign: "center",
    padding: 16,
    fontSize: 10,
    color: theme.palette.primary.main,
  },
};
