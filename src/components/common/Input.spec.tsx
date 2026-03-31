import { render, screen } from '@testing-library/react';
import Input from './Input';
import React from 'react';

import { BookStoreThemeProvider } from '../../context/themeContext';

describe('Input 컴포넌트 테스트', () => {
    it('렌더를 확인', () => {
        
        // 1. 렌더
        render(
            <BookStoreThemeProvider>
                <Input placeholder="테스트 입력" />
            </BookStoreThemeProvider>
        );
        
        // 2. 확인
        expect(screen.getByPlaceholderText('테스트 입력')).toBeInTheDocument();
    });

    it('forwardRef 동작 확인', () => {
        const ref = React.createRef<HTMLInputElement>();
        render(
            <BookStoreThemeProvider>
                <Input ref={ref} placeholder="테스트 입력" />
            </BookStoreThemeProvider>
        );
        expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
});