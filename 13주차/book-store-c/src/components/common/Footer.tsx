import styled from "styled-components";
import logo from "../../assets/images/logo.png";

function Footer() {
    return (
        <FooterStyled>
       <h1 className="logo">
        <img src={logo} alt="book store" />
       </h1>

       <div className="copyright">
        <p>copyright(c), 2025, Book Store</p>
       </div>
        </FooterStyled>
    );
}

const FooterStyled = styled.footer`
    widht: 100%;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.layout.width.large};
    border-top: 1px solid ${({ theme }) => theme.color.background};
    padding: 20px 0;
    display: flex;
    justify-content: space-between;

    .logo {
        img {
            width: 140px;
        }
    }

    .copyright {
        p {
            font-size: 0.75rem;
            color: ${({ theme }) => theme.color.text};
        }
    }
`;

export default Footer;