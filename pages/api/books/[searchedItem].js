import data from "./data.json";

export function getSearchedItems(searchedItem) {
  return data.filter(
    (item) =>
      item.book
        .toLowerCase()
        .includes(searchedItem.split("-").join(" ").toLowerCase()) ||
      item.author
        .toLowerCase()
        .includes(searchedItem.split("-").join(" ").toLowerCase())
  );
}
// export default function reqHandler(req, res) {
//   if (req.method !== "GET") {
//     req.setHeader("Allow", ["GET"]);
//     req.status(405).json({ message: `Method ${req.method} is not allowed` });
//   } else {
//     books = getSearchedItems(req.query.searchedItem);
//     req.status(200).json(books);
//   }
// }
