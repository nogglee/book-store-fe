import { fetchBookDetail, likeBook, unlikeBook } from "../api/book.api";
import type { BookDetail } from "../models/book.model"
import { useEffect, useState } from "react"
import { useAlert } from "./useAlert";
import { useAuthStore } from "../store/authStore";
import { addCart } from "../api/carts.api";

export const useBookDetail = (bookId: string | undefined) => {
    const [book, setBook] = useState<BookDetail | null>(null);
    const [cartAdded, setCartAdded] = useState<boolean>(false);

    const { isLoggedIn } = useAuthStore();
    const { showAlert } = useAlert();

    const likeToggle = () => {
        
        if (!isLoggedIn) {
            showAlert('좋아요 기능은 로그인이 필요해요.');
            return;
        }
        
        if (!book) return;

        if (book.liked) {
            unlikeBook(book.id).then(() => {
                setBook({
                    ...book,
                    liked: false,
                    likes: book.likes - 1
                });    
            })
        } else {
            likeBook(book.id).then(() => {
                setBook({
                    ...book,
                    liked: true,
                    likes: book.likes + 1
                });    
            })
        }
    }

    useEffect(() => {
        if (!bookId) return;

        fetchBookDetail(bookId).then((book) => {
            setBook(book);
        });
    }, [bookId]);

    const addToCart = (quantity: number) => {
            if (!isLoggedIn) {
                showAlert('장바구니 기능은 로그인이 필요해요.');
            }

            if(!book) return;
            
            addCart({
                book_id: book.id,
                quantity: quantity
            }).then(() => {
                setCartAdded(true);
                setTimeout(() => {
                    setCartAdded(false);
                }, 3000);
            })
        }
 
    return { book, likeToggle, addToCart, cartAdded };
}