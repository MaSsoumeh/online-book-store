import React from "react";
import { theme } from "../styles/theme";

const PageHeader = ({ title }) => {
  return (
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
  );
};

export default PageHeader;
