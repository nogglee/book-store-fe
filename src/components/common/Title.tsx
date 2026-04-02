import { styled } from "styled-components";
import type { HeadingSize, ColorKey } from "../../style/theme";

interface Props {
    children: React.ReactNode;
    size: HeadingSize;
    color?: ColorKey;
}

// INFO: Omit<Props, 'children'> Props에서 children 프로퍼티를 제거합니다.
const TitleStyled = styled.h1<Omit<Props, 'children'>>`
    font-size: ${({ theme, size }) => theme.heading[size].fontSize };
    color: ${({ theme, color }) => color ? theme.color[color] : theme.color.primary};
`;

function Title({ children, size, color }: Props) {
    return (
        <TitleStyled size={size} color={color}>
            {children}
        </TitleStyled>
    );
}

export default Title;