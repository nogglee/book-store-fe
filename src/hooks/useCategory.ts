import { useEffect, useState } from "react";
import { fetchCategory } from "../api/category.api";
import type { Category } from "../models/category.model";
import { useLocation } from "react-router-dom";

export const useCategory = () => {
    const location = useLocation();
    const [category, setCategory] = useState<Category[]>([]);

    const setActive = () => {
        const params = new URLSearchParams(location.search);
        if (params.get('category_id')) {
            setCategory((prev) => {
                return prev.map((item) => {
                    return {
                        ...item,
                        isActive: item.id === Number(params.get('category_id')),
                    }
                })
            })
        } else {
            setCategory((prev) => {
                return prev.map((item) => {
                    return {
                        ...item,
                        isActive: false,
                    }
                })
            })
        }
        
    }

    useEffect(() => {
        fetchCategory()
            .then((category) => {
                if (!category) return;
                
                const categoryWithAll = [
                    {
                        id: null,
                        categoryName: '전체',
                    },
                    ...category
                ]
                console.log("최종 카테고리:", categoryWithAll);
                setCategory(categoryWithAll);
                setActive();
            })
    }, []);

    useEffect(() => {
        setActive();
    }, [location.search]);
    
    return { category };
}