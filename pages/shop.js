import { styles } from ".";
import BookCard from "../components/BookCard.tsx";
import BookWrapper from "../components/BookWrapper";
import PageHeader from "../components/PageHeader";
import { getBooks } from "./api/books";
const ShopPage = ({ books }) => {
  return (
    <main style={{ ...styles.mainWrapper }}>
      <PageHeader title="All Books" />
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
