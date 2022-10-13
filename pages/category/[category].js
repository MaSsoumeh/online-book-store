import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import BookCard from "../../components/BookCard";
import { getBooksByCategory } from "../api/books/[category]";
import { theme } from "../../styles/theme";
import PageHeader from "../../components/PageHeader";

const CategoryPage = ({ books }) => {
  const router = useRouter();
  return (
    <Box>
      <PageHeader title={` Results for ${router.query.category}`} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          marginBottom: "100px",
          justifyContent: "flex-start",
          padding: "0 24px",
        }}
      >
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
      </Box>
    </Box>
  );
};

export default CategoryPage;

export async function getServerSideProps(ctx) {
  const category = ctx.query.category;
  const books = await getBooksByCategory(category);
  return { props: { books } };
}
