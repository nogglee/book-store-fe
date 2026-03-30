import styled from 'styled-components';
import type { Theme } from '../../style/theme';

const HeaderStyle = styled.header<{ theme: Theme }>`
  background-color: ${({ theme }) => theme.color.background};
  padding: 1rem;

  h1 {
    color: ${({ theme }) => theme.color.primary};
  }
`

export default function Header() {
  return (
    <HeaderStyle>
      <h1>Book Store Header</h1>
    </HeaderStyle>
  )
}