import Link from "next/link";
import Image from "next/image";
import Card from "@mui/material/Card";
import { theme } from "../styles/theme";
import { Box } from "@mui/material";
import { useState } from "react";

const CategoryCard = ({ image, name }) => {
  const [style, setStyle] = useState({});
  return (
    <Card sx={{ ...styles.card }}>
      <Image
        style={{ ...styles.image, ...style }}
        src={image}
        layout="fill"
        onMouseOver={() => {
          setStyle({ transform: "scale(1.2)" });
        }}
        onMouseLeave={() => {
          setStyle({});
        }}
      />
      <Link href={`/category/${name.split(" ").join("-").toLowerCase()}`}>
        <div style={styles.info}>
          <h2>{name}</h2>
          <p>SHOP NOW</p>
        </div>
      </Link>
    </Card>
  );
};
export default CategoryCard;

const styles = {
  card: {
    margin: "0.5rem",
    flex: "1 1 auto",
    position: "relative",
    minWidth: 200,
    minHeight: 200,
    maxWidth: 200,
    maxHeight: 200,
  },

  image: {
    objectFit: "cover",
    transition: " all 5s cubic-bezier(0.14, 0.96, 0.91, 0.6)",
    "&:hover": { transform: "scale(1.2)" },
  },
  info: {
    position: "absolute",
    top: "50%",
    left: "50%",
    borderRadius: "10px",
    background: theme.palette.primary.light,
    padding: "1.5rem",
    textAlign: "center",
    transform: "translate(-50%, -50%)",
    opacity: "0.7",
    cursor: "pointer",
    color: theme.palette.primary.dark,
  },
};
