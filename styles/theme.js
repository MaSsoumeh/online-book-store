import { red } from "@mui/material/colors";
import { createTheme, lighten } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#0D226B",
      light: "#F2F7FF",
      dark: "#0B409C",
    },
    secondary: {
      main: "#FDBE34",
      light: lighten("#FDBE34", 0.8),
    },
    blue: {
      main: lighten("#0D226B", 0.5),
    },
  },
});
