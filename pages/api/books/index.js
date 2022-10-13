import data from "./data.json";

export function getBooks() {
  return data;
}
export default function handler(req, res) {
  if (req.method !== "GET") {
    req.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const books = getBooks();
    res.status(200).json(books);
  }
}
