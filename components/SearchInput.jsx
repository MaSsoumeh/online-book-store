import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Link from "next/link";

export default function SearchInput({ dedicatedStyle, placeholder }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        borderRadius: "20px",
        ...dedicatedStyle,
      }}
      onSubmit={handleSubmit}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ "aria-label": { placeholder } }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Link href={`/book/${value?.split(" ").join("-").toLowerCase()}`}>
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Link>
    </Paper>
  );
}
