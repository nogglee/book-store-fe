import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Book } from "../models/book.model";
import type { Pagination } from "../models/pagination.model";
import { fetchBooks } from "../api/book.api";
import { QUERYSTRING } from "../constants/querystring";
import { LIMIT } from "../constants/pagination";

export const useBooks = () => {
    const location = useLocation();

    const [books, setBooks] = useState<Book[]>([]);
    const [pagination, setPagination] = useState<Pagination>
    ({
        totalQuantity: 0,
        currentPage: 1,
    });

    const [isEmpty, setIsEmpty] = useState(true);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        
        fetchBooks({
            category_id: params.get(QUERYSTRING.CATEGORY_ID) ? Number(params.get(QUERYSTRING.CATEGORY_ID)) : undefined,
            newest: params.get(QUERYSTRING.NEWEST) ? true : undefined,
            currentPage: params.get(QUERYSTRING.PAGE) ? Number(params.get(QUERYSTRING.PAGE)) : 1,
            limit: LIMIT,
        }).then((res) => {
            setBooks(res.books);
            setPagination(res.pagination);
            setIsEmpty(res.books.length === 0);
        })

    }, [location.search]);

    return { books, pagination, isEmpty };
}