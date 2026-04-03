import styled from "styled-components";
import { useCategory } from "../../hooks/useCategory";
import Button from "../common/Button";
import { useSearchParams } from "react-router-dom";
import { QUERYSTRING } from "../../constants/querystring";

export default function BooksFilter() {
    const { category } = useCategory();
    const [searchParams, setSearchParams] = useSearchParams();

    const handleCategory = (id: number | null) => {
        const newSearchParams = new URLSearchParams(searchParams);

        if (id === null) {
            newSearchParams.delete(QUERYSTRING.CATEGORY_ID);
        } else {
            newSearchParams.set(QUERYSTRING.CATEGORY_ID, id.toString());
        }

        setSearchParams(newSearchParams);
    }

    const handleNews = () => {
        const newSearchParams = new URLSearchParams(searchParams);
        
        if (newSearchParams.get(QUERYSTRING.NEWEST)) {
            newSearchParams.delete(QUERYSTRING.NEWEST);
        } else {
            newSearchParams.set(QUERYSTRING.NEWEST, 'true');
        }
        
        setSearchParams(newSearchParams);
    }


    return (
        <BooksFilterStyled>
            <div className="category">
                {
                    category.map((item) => (
                        <Button 
                            key={item.id} 
                            size="medium" 
                            onClick={() => handleCategory(item.id)}
                            scheme={item.isActive ? 'primary' : 'normal'} 
                        >
                            {item.categoryName}
                        </Button>
                    ))
                }
            </div>
            <div className="new">
                <Button 
                    size="medium" 
                    onClick={handleNews}
                    scheme={searchParams.get(QUERYSTRING.NEWEST) ? 'primary' : 'normal'}
                >
                    신간
                </Button>
            </div>
        </BooksFilterStyled>
    );
}

const BooksFilterStyled = styled.div`
    display: flex;
    gap: 24px;

    .category {
        display: flex;
        gap: 8px;
    }
`;
