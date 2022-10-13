import Box from "@mui/material/Box";
import PageHeader from "../components/PageHeader";
import CustomizedTables from "../components/CustomizedTables";
import { Divider } from "@mui/material";
const CartPage = () => {
  return (
    <Box>
      <PageHeader title="Shopping Cart" />
      <CustomizedTables />
    </Box>
  );
};
export default CartPage;
