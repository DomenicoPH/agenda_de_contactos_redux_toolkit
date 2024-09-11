import styled from "styled-components";
import { genericContainer } from "../styles/mixins";
import { useSelector } from "react-redux";

const ListContainer = styled.div`
    ${genericContainer}
    display: flex;
    flex-direction: column;
    padding: 1rem;
`
const ContactItem = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 1fr 1fr;
    gap: 1rem;
    padding: .5rem;
    border-bottom: 1px solid #ccc;
`
const ContactField = styled.div`
    font-size: 1.2rem;
    color: var(--prl);
`

const ContactList = () => {
    
    const contactos = useSelector( (state) => state.contactos.contactos);
    
    return(
        <ListContainer>
            {contactos.map( (contacto, index) => (
                <ContactItem key={index}>
                    <ContactField>{contacto.nombre}</ContactField>
                    <ContactField>{contacto.apellido}</ContactField>
                    <ContactField>{contacto.telefono}</ContactField>
                    <ContactField>{contacto.email}</ContactField>
                </ContactItem>
            ))}
        </ListContainer>
    )
}

export default ContactList;