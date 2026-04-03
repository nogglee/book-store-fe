import { render } from "@testing-library/react";
import BookItem from "./BookItem";
import type { Book } from "../../models/book.model";
import { BookStoreThemeProvider } from "../../context/themeContext";

const dummyBook: Book = {
  id: 1,
  title: 'Book Title',
  img: 1,
  category_id: 1,
  form: 'Paperback',
  isbn: '1234567890',
  summary: 'Book Summary',
  detail: 'Book Detail',
  author: 'Book Author',
  pages: 100,
  contents: 'Book Contents',
  price: 10000,
  likes: 0,
  pubDate: '2022-01-01',
}

describe("BookItem", () => {
    it("렌더 여부", () => {
        const { getByText, getByAltText } = render(
            <BookStoreThemeProvider>
                <BookItem book={dummyBook} view="list" />
            </BookStoreThemeProvider>
        )
        expect(getByAltText(dummyBook.title)).toHaveAttribute('src', `https://picsum.photos/id/${dummyBook.img}/600/600`);
        expect(getByText(dummyBook.title)).toBeInTheDocument();
        expect(getByText(dummyBook.author)).toBeInTheDocument();
        expect(getByText('10,000원')).toBeInTheDocument();
    });
});