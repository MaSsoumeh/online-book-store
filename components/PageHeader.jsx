import React from "react";
import { theme } from "../styles/theme";

const PageHeader = ({ title }) => {
  return (
    <p
      style={{
        textAlign: "center",
        width: "100%",
        background: theme.palette.secondary.main,
        marginBottom: 36,
        color: theme.palette.primary.dark,
      }}
    >
      {title}
    </p>
  );
};

export default PageHeader;
