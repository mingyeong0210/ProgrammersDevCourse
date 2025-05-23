import { styled } from "styled-components";
import logo from "../../assets/images/logo.png";
import { FaSignInAlt, FaRegUser } from 'react-icons/fa';

const CATEGORY = [
  {
    id: null,
    name: `전체`,
  },
  {
    id: 0,
    name: `동화`,
  },
  {
    id: 1,
    name: `소설`,
  },
  {
    id: 2,
    name: `사회`,
  },
];

function Header() {
  return (
    <HeaderStyled>
      <h1 className="logo">
        <img src={logo} alt="book store" />
      </h1>
      <nav className="category">
        <ul>
          {
            CATEGORY.map((item) => (
              <li key={item.id}>
                <a href={item.id === null ? `/books` : `/books?category_id=${item.id}`}>
                  {item.name}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>

      <nav className="auth">
        <ul>
          <li>
            <a href="/login">
              <FaSignInAlt />
              로그인
            </a>
          </li>
          <li>
            <a href="/register">
              <FaRegUser />
              회원가입
            </a>
          </li> 
        </ul>
      </nav>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  widht: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding; 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.background};

  .logo {
    img {
      width: 200px;
    }
  }

  .category {
    ul {
      display: flex;
      gap: 32px;
      li {
        a {
          font-size: 1.5rem;
          font-weight: 600;
          text-decoration: none;
          color: ${({ theme }) => theme.color.text};

          &:hover {
            color: ${({ theme }) => theme.color.primary};
          }
        }
      }
    }
  }

  .auth {
    ul {
      display: flex;
      gap: 16px;
      li {
        a {
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
        }
      }
    }
  }
`;

export default Header;