import { Link } from "react-router-dom";
import styled from "styled-components";
import { flexCenter, genericTitle } from "../styles/mixins";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaAddressBook } from "react-icons/fa";

const WelcomeContainer = styled.div`
    ${flexCenter}
    height: calc(100dvh - 4rem);
    flex-direction: column;
    
`
const Title = styled.h2`
    ${genericTitle('var(--myfont)', '5rem')}
    margin: 2rem auto;
    text-shadow: 3px 3px 0 var(--darker);
`
const Box = styled.div`
    display: flex;
`
const Icon = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 12rem;
    color: var(--pr);
    transition: scale .3s ease, color .3s ease;
    padding: 1rem;

    &:hover{
        cursor: pointer;
        filter: drop-shadow(5px 5px 0 var(--darker));
        color: var(--prl);
        scale: 1.1;
    }
`
const LinkText = styled.span`
    display: none;
    font-family: var(--myfont);
    font-size: 1.2rem;
    font-weight: 300;
    text-align: justify;
    max-width: 35%;
    padding-top: 1rem;
`

const WelcomeScreen = () => {
    return(
        <WelcomeContainer>
            
            <Title>Welcome</Title>
            <Box>
                <Icon to={'/add'}><IoPersonAddSharp/><LinkText>Agregar contacto</LinkText></Icon>
                <Icon to={'/list'}><FaAddressBook/><LinkText>Lista de contactos</LinkText></Icon>
            </Box>
            
        </WelcomeContainer>
    )
};

export default WelcomeScreen;