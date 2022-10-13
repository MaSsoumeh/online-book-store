import CategoryCard from "../components/CategoryCard";
import { theme } from "../styles/theme";
import { categories } from "../data/bookCategories";
import PageHeader from "../components/PageHeader";

const HomePage = () => {
  return (
    <main style={styles.mainWrapper}>
      <PageHeader title="Book Categories" />
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

const styles = {
  mainWrapper: {
    color: theme.palette.primary.dark,
  },
  section: {
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "center",
  },
};
