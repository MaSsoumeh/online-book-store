import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import BookCard from "../../components/BookCard.tsx";
import { getBooksByCategory } from "../api/category/[category]";
import { theme } from "../../styles/theme";
import PageHeader from "../../components/PageHeader";
import BookWrapper from "../../components/BookWrapper";
import { styles } from "..";
const CategoryPage = ({ books }) => {
  const router = useRouter();
  return (
    <main style={{ ...styles.mainWrapper }}>
      <PageHeader
        title={` Results for ${router.query.category.split("-").join(" ")}`}
      />
      <BookWrapper>
        {books.length ? (
          books.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <Typography
            color={theme.palette.primary.main}
            sx={{ width: "100%", textAlign: "center" }}
          >
            There is no book in this category
          </Typography>
        )}
      </BookWrapper>
    </main>
  );
};

export default CategoryPage;

export async function getServerSideProps(ctx) {
  const category = ctx.query.category;
  const books = await getBooksByCategory(category);
  return { props: { books } };
}
