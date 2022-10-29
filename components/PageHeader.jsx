import React, { useContext } from "react";
import { theme } from "../styles/theme";
import SearchInput from "./SearchInput";
import Box from "@mui/material/Box";
import SearchVisibilityContext from "../context/SearchVisibility";
import { useRouter } from "next/router";

const PageHeader = ({ title }) => {
  const { visible } = useContext(SearchVisibilityContext);

  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          width: "100%",
          position: "fixed",
          top: visible ? { xs: 58, sm: 66 } : 0,
          right: 0,
          transition: "all 0.7s ease-out",
          zIndex: "10",
        }}
      >
        <SearchInput placeholder="Search for books or authors..." />
      </Box>
      <p
        style={{
          textAlign: "center",
          width: "100%",
          background: theme.palette.primary.light,
          marginBottom: 36,
          color: theme.palette.primary.dark,
          padding: "24px",
        }}
      >
        {title}
      </p>
    </>
  );
};

export default PageHeader;
