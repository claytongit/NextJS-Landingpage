
import styled from 'styled-components';

export const Conteiner = styled.div`
    width: 100%;
    height: 100vh;    

    display: flex;
`;

export const Content = styled.div`
    width: 50%;
    background-color: ${props => props.theme.colors.white};

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img``;

export const Form = styled.form`
    width: 50%;
    padding: 0 150px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: start;
`;

export const Title = styled.h1`
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 50px;
`;

export const Label = styled.label`
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.sizes.small};
    margin-top: 20px;
`;

export const Input = styled.input`
    font-family: ${props => props.theme.fonts.secondary};
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
`;

export const Button = styled.button`
    border: none;
    border-radius: 20px;
    background: ${props => props.theme.colors.secondaryBase};
    padding: 10px;
    margin-top: 20px;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.primary};
    transition: opacity .3s ease-in-out;
    cursor: pointer;

    &:hover{
        opacity: .8;
    }
`;

export const Error = styled.span`
    font-family: ${props => props.theme.fonts.secondary};
    font-size: ${props => props.theme.sizes.small};
    color: red;
`;