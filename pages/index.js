import CategoryCard from "../components/CategoryCard";
import { theme } from "../styles/theme";
import { categories } from "../data/bookCategories";
import PageHeader from "../components/PageHeader";
import SearchInput from "../components/SearchInput";

const HomePage = () => {
  return (
    <main style={styles.mainWrapper}>
      <PageHeader title="Book Categories" />
      <SearchInput
        dedicatedStyle={{ marginBottom: "36px" }}
        placeholder="Search for books or authors..."
      />
      <section style={styles.section}>
        {categories.map((category) => {
          return (
            <CategoryCard
              key={category.id}
              image={category.image}
              name={category.name}
            />
          );
        })}
      </section>
    </main>
  );
};
export default HomePage;

export const styles = {
  mainWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: theme.palette.primary.dark,
  },
  section: {
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "center",
  },
};
