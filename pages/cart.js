import Box from "@mui/material/Box";
import PageHeader from "../components/PageHeader";
import CustomizedTables from "../components/CustomizedTables";
import { styles } from ".";
const CartPage = () => {
  return (
    <main style={{ ...styles.mainWrapper }}>
      <PageHeader title="Shopping Cart" />
      <main style={{ width: "100%", maxWidth: "1566px" }}>
        <CustomizedTables />
      </main>
    </main>
  );
};
export default CartPage;
