export type ThemeName = 'light' | 'dark';
export type ColorKey = 'primary' | 'secondary' | 'third' | 'background' | 'border' | 'text';
export type HeadingSize = 'large' | 'medium' | 'small';
export type ButtonSize = 'large' | 'medium' | 'small';
export type ButtonScheme = 'primary' | 'normal' | 'like';
export type LayoutWidth = 'small' | 'medium' | 'large';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export interface Theme {
    name: ThemeName;
    color: Record<ColorKey, string>;
    heading: { [Key in HeadingSize]: { fontSize: string; } }
    button: { [Key in ButtonSize]: { fontSize: string; padding: string; } }
    buttonScheme: { [Key in ButtonScheme]: { color: string; backgroundColor: string; } }
    borderRadius: { default: string };
    layout: { width: { [Key in LayoutWidth]: string } };
}

export const light: Theme = {
    name: 'light',
    color: {
        primary: '#ff5800',
        secondary: '#5f5f5f',
        third: '#00a878',
        background: 'lightgray',
        border: 'grey',
        text: 'black',
    },
    heading: {
        large: { fontSize: '2rem' },
        medium: { fontSize: '1.5rem' },
        small: { fontSize: '1rem' }
    },
    button: {
        large: { fontSize: '1.5rem', padding: '1rem 2rem' },
        medium: { fontSize: '1rem', padding: '0.5rem 1rem' },
        small: { fontSize: '0.75rem', padding: '0.25rem 0.5rem' }
    },
    buttonScheme: {
        primary: { color: 'white', backgroundColor: 'midnightblue' },
        normal: { color: 'black', backgroundColor: 'lightgray' },
        like: { color: 'white', backgroundColor: 'coral' }
    },
    borderRadius: { default: '4px' },
    layout: {
        width: {
            small: '320px',
            medium: '760px',
            large: '1020px'
        }
    }
}

export const dark: Theme = {
    ...light,
    name: 'dark',
    color: {
        primary: 'coral',
        background: 'midnightblue',
        secondary: 'white',
        third: 'gray',
        border: 'lightgray',
        text: 'white'
    }
}

export const getTheme = (themeName: ThemeName): Theme => {
    switch (themeName) {
        case 'light':
            return light;
        case 'dark':
            return dark;
        default:
            return dark;
    }
}