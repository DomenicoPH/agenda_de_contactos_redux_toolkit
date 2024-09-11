import styled from "styled-components";
import { genericContainer } from "../styles/mixins";
import { IoPersonAddSharp } from "react-icons/io5";

import { useState } from "react";

import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactosSlice";

const AddContainer = styled.div`
    ${genericContainer}
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .1rem;
`
const Label = styled.label`
    font-family: var(--myfont);
    font-size: 1.5rem;
    color: var(--pr);
    text-transform: uppercase;
    margin-right: .5rem;
    user-select: none;
`
const Input = styled.input`
    background-color: var(--darker);
    border: none;
    border: 1px solid transparent;
    margin: 0 .3rem;
    font-size: 2rem;
    color: var(--prl);
    text-align: right;
    padding-right: 1rem;
    height: 3rem;
    flex-grow: 1;

    &:focus{
        border: 1px solid var(--pr);
        outline: none;
        border-radius: 5px;
        opacity: .5;
    }
`
const Close = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--dark);
    font-family: var(--myfont);
    font-size: 2rem;
    background-color: var(--pr);
    height: 3rem;
    width: 3rem;
    margin: 0;
    opacity: .5;
    transition: opacity .3s ease;

    &:hover{
        cursor: pointer;
        user-select: none;
        opacity: 1;
    }
`
const AgregarContactoButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--dark);
    font-family: var(--myfont);
    font-size: 2rem;
    background-color: var(--pr);
    border: none;
    margin: 0;
    margin-top: .2rem;
    padding: 1rem;
    opacity: .5;
    transition: opacity .3s ease;

    &:hover{
        cursor: pointer;
        user-select: none;
        opacity: 1;
    }
`
const Sp = styled.span`
    width: 10px;
`

const AddContact = () => {

    const dispatch = useDispatch();

    const [contact, setContact] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setContact( (prevContact) => ({
            ...prevContact,
            [name]: value
        }));
    };

    const handleResetInput = (field) => {
        setContact( (prev) => ({
            ...prev,
            [field]: '',
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addContact(contact));
        setContact({
            nombre: '',
            apellido: '',
            telefono: '',
            email: '',
        })
    };

    return(
        <AddContainer>

            <Form onSubmit={handleSubmit}>

                <Box>
                    <Label>Nombre: </Label>
                    <Input 
                        name="nombre"
                        type="text"
                        value={contact.nombre}
                        onChange={handleChange}
                    />
                    <Close onClick={() => handleResetInput('nombre')}>X</Close>
                </Box>

                <Box>
                    <Label>Apellido: </Label>
                    <Input 
                        name="apellido"
                        type="text"
                        value={contact.apellido}
                        onChange={handleChange}
                    />
                    <Close onClick={() => handleResetInput('apellido')}>X</Close>
                </Box>

                <Box>
                    <Label>Teléfono: </Label>
                    <Input 
                        name="telefono"
                        type='tel'
                        value={contact.telefono}
                        onChange={handleChange}
                    />
                    <Close onClick={() => handleResetInput('telefono')}>X</Close>
                </Box>

                <Box>
                    <Label>Email: </Label>
                    <Input 
                        name="email"
                        type='email'
                        value={contact.email}
                        onChange={handleChange}
                    />
                    <Close onClick={() => handleResetInput('email')}>X</Close>
                </Box>

                <AgregarContactoButton type='submit'><IoPersonAddSharp /><Sp/>Agregar contacto</AgregarContactoButton>

            </Form>

        </AddContainer>
    )
}

export default AddContact;