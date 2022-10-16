import BookCard from "../components/BookCard";
import BookWrapper from "../components/BookWrapper";
import PageHeader from "../components/PageHeader";
import SearchInput from "../components/SearchInput";
import { theme } from "../styles/theme";
import { getBooks } from "./api/books";
import { styles } from ".";
const ShopPage = ({ books }) => {
  return (
    <main style={{ ...styles.mainWrapper }}>
      <PageHeader title="All Books" />
      <SearchInput placeholder="Search for books or authors..." />
      <BookWrapper>
        {books.map((book) => {
          return <BookCard book={book} key={book.id} />;
        })}
      </BookWrapper>
    </main>
  );
};

export default ShopPage;

export async function getStaticProps() {
  const books = await getBooks();
  return { props: { books } };
}
