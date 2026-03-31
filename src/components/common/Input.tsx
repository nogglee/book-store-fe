import React from 'react';
import styled from 'styled-components';
import type { Theme } from '../../style/theme';

interface Props {
    placeholder?: string;
}

const InputText = React.forwardRef((props: Props, ref: React.Ref<HTMLInputElement>) => {
    return (
        <InputTextStyled placeholder={props.placeholder} ref={ref} />
    );
});

const InputTextStyled = styled.input.attrs({ type: 'text' })<{ theme: Theme }>`
    padding: 0.25rem 0.75rem;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    font-size: 1rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.text};
`;

export default InputText;