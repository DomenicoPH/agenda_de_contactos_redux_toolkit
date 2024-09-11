import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonContainer = styled.div`
    border: 1px solid var(--pr);
    background-color: var(--pr);

    &:hover{
        background-color: var(--prhover);
        cursor: pointer;
    }
`
const ButtonText = styled(Link)`
    color: var(--dark);
    font-family: var(--myfont);
    font-size: 1.5rem;
    font-weight: 500;
    text-decoration: none;
    line-height: 3rem;
    padding: 1rem;
    margin: 0;
`

const Button = ({ text, dest }) => {
    return(
        <ButtonContainer>
            <ButtonText to={dest}>{text}</ButtonText>
        </ButtonContainer>
    )
}

export default Button;