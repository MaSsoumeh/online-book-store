import { styles } from ".";
import CustomizedTables from "../components/CustomizedTables";
import PageHeader from "../components/PageHeader";
const CartPage = () => {
  return (
    <main style={{ ...styles.mainWrapper, minWidth: "669px" }}>
      <PageHeader title="Shopping Cart" />
      <main style={{ width: "100%", maxWidth: "1566px" }}>
        <CustomizedTables />
      </main>
    </main>
  );
};
export default CartPage;
