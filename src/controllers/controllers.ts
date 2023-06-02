import { Request, Response } from "express";
import { Book, books } from "../service/data";

export function getBooks(req: Request, res: Response) {
  const name = req.query.name;
  const count = Number(req.query.count);

  if (name) {
    const book = books.find((book) => book.name == name);

    res.status(200).send({
      message: "Book by name",
      book,
    });
  } else if (count) {
    const filter = books.filter((book) => book.count <= count);
    res.status(200).send({
      message: "Books by count",
      books:filter
    });
  } else {
    res.status(200).send({
      message: "All books",
      books,
    });
  }
}

export function postBook(req: Request, res: Response) {
  const book: Book = req.body;
  books.push(book);

  res.status(200).send({
    message: "Book added",
  });
}
export function deleteBook(req: Request, res: Response) {
  books.splice(+req.params.index, 1);

  res.status(200).send({
    message: `Book ${req.params.index} deleted`,
  });
}
export function putBook(req: Request, res: Response) {
  books[+req.params.id] = req.body;

  res.status(200).send({
    message: `Book ${req.params.id} updated`,
  });
}
