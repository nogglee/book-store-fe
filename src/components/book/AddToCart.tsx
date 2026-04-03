import styled from "styled-components";
import type { BookDetail } from "../../models/book.model";
import Button from "../common/Button";
import InputText from "../common/Input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useBookDetail } from "../../hooks/useBookDetail";

interface Props {
    book: BookDetail;
}

interface AddToCartStyleProps {
    $added: boolean;
}

export const AddToCart = ({ book }: Props) => {
    const [quantity, setQuantity] = useState<number>(1);
    const { addToCart, cartAdded } = useBookDetail(book.id.toString())

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));
    }

    const handleIncrese = () => {
        setQuantity(quantity + 1);
    }

    const handleDecrease = () => {
        if (quantity <= 1) return;
        setQuantity(quantity - 1);
    }

    return (
        <AddToCartStyled $added={cartAdded}>
            <div>
                <Button size='medium' scheme='normal' onClick={handleDecrease}>-</Button>
                <InputText inputType='number' value={quantity} onChange={handleChange} />
                <Button size='medium' scheme='normal' onClick={handleIncrese}>+</Button>
            </div>
            <Button size='medium' scheme='primary' onClick={() => addToCart(quantity)}>장바구니 담기</Button>
            <div className="added">
                <p>장바구니에 추가되었습니다.</p>
                <Link to='/cart'>장바구니로 이동</Link>
            </div>
        </AddToCartStyled>
    );
};

export const AddToCartStyled = styled.div<AddToCartStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: all 0.5s ease;

  .added {
    position: absolute;  
    right: 0;
    bottom: -90px;
    background: ${({ theme }) => theme.color.background};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    opacity: ${({ $added }) => $added ? '1' : '0'};
    padding: 8px 12px;

    p {
        padding: 0 0 8px 0;
        margin: 0;
    }
  }
`;
