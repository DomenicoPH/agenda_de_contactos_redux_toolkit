import styled from "styled-components";
import { flexCenter, genericTitle } from "../styles/mixins";
import AddContact from "../components/AddContact"
import Button from "../components/Button";

const AddContainer = styled.div`
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

const AddScreen = () => {
    return(
        <AddContainer>
            <Title>Agrega un contacto</Title>
            <Container>

                <AddContact />

            </Container>
            <GoBack>
                <Button text='Volver' dest={'/'} />
            </GoBack>
        </AddContainer>
    )
};

export default AddScreen;