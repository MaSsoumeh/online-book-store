import data from "../books/data.json";

export function getBooksByCategory(category) {
  return data.filter(
    (book) =>
      book.category.toLowerCase() ===
      category.split("-").join(" ").toLowerCase()
  );
}

// export default function handler(req, res) {
//   if (req.method !== "GET") {
//     req.setHeader("Allow", ["GET"]);
//     req.status(405).json({ message: `Method ${req.method} is not allowed` });
//   } else {
//     const books = getBooksByCategory(req.query.category);
//     req.status(200).json(books);
//   }
// }
