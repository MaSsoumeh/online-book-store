import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Link from "next/link";
import { theme } from "../styles/theme";
import { Button, darken } from "@mui/material";

export default function SearchInput({ dedicatedStyle, placeholder }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: 400,
        // borderRadius: "10px",
        height: "48px",
        width: "100%",
        ...dedicatedStyle,
      }}
      onSubmit={handleSubmit}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ "aria-label": { placeholder } }}
        value={value}
        onChange={handleChange}
      />
      <Link href={`/book/${value?.split(" ").join("-").toLowerCase()}`}>
        <Button
          type="submit"
          sx={{
            p: "10px",
            background: theme.palette.secondary.main,
            height: "100%",
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
            "&:hover": {
              background: darken(theme.palette.secondary.main, 0.1),
            },
          }}
          aria-label="search"
        >
          <SearchIcon />
        </Button>
      </Link>
    </Paper>
  );
}
