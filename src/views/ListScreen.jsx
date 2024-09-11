import styled from "styled-components";
import { flexCenter, genericTitle } from "../styles/mixins";
import Button from "../components/Button";
import ContactList from "../components/ContactList";

const ListContainer = styled.div`
    ${flexCenter}
    flex-direction: column;
    height: 100dvh;
    
`
const Container = styled.div`
    
`
const GoBack = styled.div`
    
`
const Title = styled.h2`
    ${genericTitle('var(--myfont)')}
    text-shadow: 3px 3px 0 var(--darker);
`

const ListScreen = () => {
    return(
        <ListContainer>
            <Title>Contactos</Title>
            <Container>

                <ContactList />

            </Container>
            <GoBack>
                <Button text='Volver' dest={'/'} />
            </GoBack>
        </ListContainer>
    )
};

export default ListScreen;