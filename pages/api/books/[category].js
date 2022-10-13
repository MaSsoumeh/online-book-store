import data from "./data.json";

export function getBooksByCategory(category) {
  return data.filter((book) => book.category === category);
}

export default function handler(req, res) {
  if (req.method !== "GET") {
    req.setHeader("Allow", ["GET"]);
    req.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    books = getBooksByCategory(req.query.category);
    req.status(200).json(books);
  }
}
