import styled from "styled-components";
import Footer from "../common/Footer";
import Header from "../common/Header";

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <LayoutStyled>
            <Header />
            <main>{children}</main>
            <Footer />
        </LayoutStyled>
    );
}

const LayoutStyled = styled.main`
    widht: 100%;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.layout.width.large};
    padding: 20px 0;
`;

export default Layout;