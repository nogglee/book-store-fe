import styled from "styled-components";
import type { BookDetail } from "../../models/book.model";
import { FaHeart } from "react-icons/fa";
import Button from "../common/Button";

interface Props {
    book: BookDetail;
    onClick: () => void;
}

export default function LikeButton({ book, onClick }: Props) {
    return (
        <LikeButtonStyled size='medium' scheme={book.liked ? 'like' : 'normal'} onClick={onClick}>
            <FaHeart />
            {book.likes}
        </LikeButtonStyled>
    );
}

const LikeButtonStyled = styled(Button)`
    display: flex;
    gap: 6px;

    svg {
        color: inherit;
        * {
            color: inherit;
        }
    }
`;
