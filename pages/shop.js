import BookCard from "../components/BookCard";
import { theme } from "../styles/theme";
import { getBooks } from "./api/books";

const ShopPage = ({ books }) => {
  return (
    <main style={{ color: theme.palette.primary.dark }}>
      <p
        style={{
          textAlign: "center",
          background: theme.palette.secondary.main,
        }}
      >
        All Books
      </p>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          paddingRight: 24,
          paddingLeft: 24,
          marginBottom: 100,
          justifyContent: "flex-start",
          marginTop: 36,
        }}
      >
        {books.map((book) => {
          return <BookCard book={book} key={book.id} />;
        })}
      </section>
    </main>
  );
};

export default ShopPage;
export async function getStaticProps() {
  const books = await getBooks();
  return { props: { books } };
}
