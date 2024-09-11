import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaAddressBook } from "react-icons/fa";

const NavbarContainer = styled.div`
    display: flex;
`
const NavButton = styled(Link)`
    display: flex;
    align-items: center;
    padding: .5rem .5rem;
    margin: 0 .5rem;
    color: var(--prl);
    text-decoration: none;
    font-size: 1.5rem;
    border-radius: 5px;

    &:hover{
        background-color: var(--prhover);
    }
`
const Sp = styled.span`
    width: 5px;
`

const Navbar = () => {
    return(
        <NavbarContainer>
            <NavButton to={'/add'}><IoPersonAddSharp/><Sp/>Agregar</NavButton>
            <NavButton to={'/list'}><FaAddressBook/><Sp/>Contactos</NavButton>
        </NavbarContainer>
    )
};

export default Navbar;