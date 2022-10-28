import Typography from "@mui/material/Typography";
import BookWrapper from "../../components/BookWrapper";
import PageHeader from "../../components/PageHeader";
import { getSearchedItems } from "../api/books/[searchedItem]";
import { styles } from "..";
import { theme } from "../../styles/theme";
import BookCard from "../../components/BookCard";

const Book = ({ books }) => {
  return (
    <main style={{ ...styles.mainWrapper }}>
      <PageHeader title="Searched Books" />
      <BookWrapper>
        <Typography
          color={theme.palette.primary.main}
          sx={{ width: "100%", textAlign: "center" }}
        >
          There is no result
        </Typography>
      </BookWrapper>
    </main>
  );
};

export default Book;

export async function getServerSideProps(ctx) {
  const searchedItem = ctx.query.searchedItem;
  const books = await getSearchedItems(searchedItem);
  return {
    props: { books },
  };
}
