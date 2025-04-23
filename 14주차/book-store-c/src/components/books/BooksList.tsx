import styled from "styled-components";
import BookItem from "./BookItem";
import { Book } from "../../models/book.model";

const dummyBook: Book = {
    id: 1,
    title: "Dummy Book",
    img: 5, 
    category_id: 1,
    summary: "Dummy summary",
    author: "Dummy Author",
    price: 10000,
    likes: 1,
    form: "paperback",
    isbn: "Dummy ISBN",
    detail: "Dummy detail",
    pages: 100,
    contents : "Dummy contents",
    pubDate: "2021-01-01",
};

function BooksList() {
    return (
        <BooksListStyle>
            <BookItem book={dummyBook}/>
        </BooksListStyle>
    );
}

const BooksListStyle = styled.div``;

export default BooksList;