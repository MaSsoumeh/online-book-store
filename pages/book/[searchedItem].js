import Box from "@mui/material/Box";
import BookCard from "../../components/BookCard";
import BookWrapper from "../../components/BookWrapper";
import PageHeader from "../../components/PageHeader";
import { getSearchedItems } from "../api/books/[searchedItem]";
import { styles } from "..";

const BookPage = ({ books }) => {
  return (
    <main style={{ ...styles.mainWrapper }}>
      <PageHeader title="Searched Books" />
      <BookWrapper>
        {books.length ? (
          books.map((book) => {
            return <BookCard key={book.id} book={book} />;
          })
        ) : (
          <Typography
            color={theme.palette.primary.main}
            sx={{ width: "100%", textAlign: "center" }}
          >
            There is no result
          </Typography>
        )}
      </BookWrapper>
    </main>
  );
};

export default BookPage;

export async function getServerSideProps(ctx) {
  const searchedItem = ctx.query.searchedItem;
  const books = await getSearchedItems(searchedItem);
  return {
    props: { books },
  };
}
