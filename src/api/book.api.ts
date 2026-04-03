import type { Book } from "../models/book.model";
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