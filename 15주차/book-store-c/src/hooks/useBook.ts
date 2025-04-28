import { useEffect, useState } from "react"
import { BookDetail, BookReviewItem } from "../models/book.model"
import { fetchBook, likeBook, unlikeBook } from "../api/books.api";
import { useAuthStore } from "../store/authStore";
import { useAlert } from "./useAlert";
import { addCart } from "../api/carts.api";
import { fetchBookReview } from "@/api/review.api";

export const useBook = (bookId: string | undefined) => {
    const [book, setBook] = useState<BookDetail | null>(null);
    const [cartAdded, setCartAdded] = useState(false);
    const [reviews, setReviews] = useState<BookReviewItem[]>([]);

    const { isloggedIn } = useAuthStore();
    const { showAlert }  = useAlert();

    const likeToggle = () => {
        // 권한 확인
        if (!isloggedIn) {
            showAlert(`로그인이 필요합니다.`);
            return;
        }

        if(!book) return;

        if (book.liked) {
            //   라이크 상태 -> 언라이크 실행
            unlikeBook(book.id).then(() => {
                setBook({
                    ...book,
                    liked: false,
                    likes: book.likes - 1,
                });
            });
        } else {
            // 언라이크 상태 -> 라이크 실행
            likeBook(book.id).then(() => {
                // 성공 처리 (낙관적 업데이트)
                setBook({
                    ...book,
                    liked: true,
                    likes: book.likes + 1,
                });
            });
        }
    };

    const addToCart = (quantity: number) => {
        if(!book) return;
        
        addCart({
            book_id: book.id,
            quantity: quantity
        }).then(() => {
            setCartAdded(true);
            setTimeout(() => {
                setCartAdded(false);
            }, 3000);
        });
    }

    useEffect(() => {
        if(!bookId) return;
        
        fetchBook(bookId).then((book) => {
            setBook(book);
        });

        fetchBookReview(bookId).then((reviews) => {
            setReviews(reviews);
        })
    }, [bookId]);

    return { book, likeToggle, addToCart, cartAdded, reviews };
}