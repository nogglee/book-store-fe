import styled from "styled-components";
import { useState } from "react";
import Button from "../common/Button";
import { FaAngleDown } from "react-icons/fa6";

interface Props {
    children: React.ReactNode;
    lines: number;
}

const EllipsisBox = ({ children, lines }: Props) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <EllipsisBoxStyled lines={lines} $expanded={expanded} >
            <p>{children}</p>
            <div className="toggle">
                <Button size='small' scheme="normal" onClick={() => setExpanded(!expanded)}>
                    {expanded ? '접기' : '펼치기'} <FaAngleDown />
                </Button>
            </div>
        </EllipsisBoxStyled>
    );
};

interface EllipsisBoxStyledProps extends Props {
    lines: number;
    $expanded: boolean;
}

const EllipsisBoxStyled = styled.div<EllipsisBoxStyledProps>`
    p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: ${({ lines, $expanded }) => $expanded ? 'none' : lines};
        -webkit-box-orient: vertical;
        padding: 20px 0 0 0;
        margin: 0;
    }
    .toggle {
        display: flex;
        justify-content: end;

        svg {
            transform: ${({ $expanded }) => $expanded ? 'rotate(180deg)' : 'none'};
        }
    }
`;

export default EllipsisBox;