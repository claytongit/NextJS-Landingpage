import styled from "styled-components";

export const Container = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 15px;

    @media (max-width: 1024px){
        display: none;
    }
`;

export const Imagem = styled.img``;

export const Link = styled.ul`
    background-color: ${props => props.theme.colors.white};
    border-radius: 5px;
    padding: 10px 20px;
    width: 70%;
    margin: 0 10px;

    display: flex;
    list-style: none;
`;

export const Item = styled.li`
    margin-right: 30px;
    color: ${props => props.theme.colors.primaryBase};
    font-family: ${props => props.theme.fonts.secondary};
    font-size: ${props => props.theme.sizes.body};
    cursor: pointer;
    transition: opacity .2s ease-in-out;

    &:hover{
        opacity: .7;
    }
`;

export const Button = styled.button`
    width: 150px;
    height: 40px;
    background: ${props => props.theme.colors.secondaryBase};
    border: none;
    outline: none;
    border-radius: 5px;
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    transition: opacity .2s ease-in-out;

    &:hover{
        opacity: .9;
    }
`;