import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import { FaRegAddressBook } from "react-icons/fa6";

const HeaderContainer = styled.div`
    background-color: var(--pr);
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
`
const Title = styled(Link)`
    display: flex;
    align-items: center;
    color: var(--prl);
    font-size: 2rem;
    text-decoration: none;
    margin: 0;
    padding: .5rem;
`
const Sp = styled.span`
    width: 5px;
`
const Header = () => {
    return(
        <HeaderContainer>
            <Title to={'/'}><FaRegAddressBook/><Sp/>Contactos</Title>
            <Navbar />
        </HeaderContainer>
    )
}

export default Header;