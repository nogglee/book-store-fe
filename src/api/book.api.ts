import type { Book, BookDetail } from "../models/book.model";
import type { Pagination as IPagination } from "../models/pagination.model";
import { httpClient } from "./http";

interface FetchBooksParams {
    category_id?: number;
    newest?: boolean;
    currentPage?: number;
    limit: number;
}

interface FetchBooksResponse {
    books: Book[];
    pagination: IPagination;
}

export const fetchBooks = async (params: FetchBooksParams) => {
    try {
        const response = await httpClient.get<FetchBooksResponse>('/books', {
            params: params,
        })

        return response.data;
    } catch (error) {
        return {
            books: [],
            pagination: {
                totalQuantity: 0,
                currentPage: 1,
            },
        };
    }
}

export const fetchBookDetail = async (bookId: string | undefined) => {
    if (!bookId) return null;

    const response = await httpClient.get<BookDetail | null>(`/books/${bookId}`);
    return response.data;
}

export const likeBook = async (bookId: number) => {
    const response = await httpClient.post(`/like/${bookId}`);    
    return response.data;
}

export const unlikeBook = async (bookId: number) => {
    const response = await httpClient.delete(`/like/${bookId}`);    
    return response.data;
}
