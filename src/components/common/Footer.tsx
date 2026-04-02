import React from 'react'
import logo from '../../assets/logo.png'
import styled from 'styled-components'

const Footer: React.FC = () => {
  return (
    <FooterStyle>
        <h1 className='logo'>
            <img src={logo} alt="Book Store Logo" />
        </h1>
        <div className='copyright'>
            <p>© 2025 Book Store. All rights reserved.</p>
        </div>
    </FooterStyle>
  )
}

const FooterStyle = styled.footer`
  width: 100%;
  margin: 0 auto;
  max-width: ${({theme}) => theme.layout.width.large};
  border-top: 1px solid ${({theme}) => theme.color.border};
  padding: 20px 0;
  display: flex;
  justify-content: space-between;

  .logo{
    img { width: 140px; }
  }
  .copyright{
    p { 
      font-size: 0.875rem; 
      color: ${({theme}) => theme.color.text};
    }
  }
`;

export default Footer