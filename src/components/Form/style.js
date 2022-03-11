import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 353px;
    margin-bottom: 50px;
    padding: 0 185px;
    position: relative;

    background: rgba(44,122,237,1) url("images/efeito.png") no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1024px){
        padding: 0 70px;
        height: 341px;

        background: rgba(44,122,237,1) url("images/efeito-02.png") no-repeat;
    }

    @media (max-width: 600px){
        padding: 0 10px;
        height: 427px;

        background: rgba(44,122,237,1) url("images/efeito-03.png") no-repeat;
    }

`;

export const ImageDesktop = styled.img`
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;

    @media (max-width: 1024px){
        display: none;
    }
`;

export const ImageTablet = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    display: none;

    @media (max-width: 1024px){
        width: 100%;
        display: block;
    }

    @media (max-width: 600px){
        display: none;
    }
`;

export const ImageMobile = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    display: none;

    @media (max-width: 600px){
        width: 100%;
        display: block;
    }
`;

export const Content = styled.div`
    z-index: 1;
`;

export const Title = styled.h2`
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.white};
    letter-spacing: 2px;

    @media (max-width: 600px){
        font-size: ${props => props.theme.sizes.body};
    }
`;

export const Text = styled.p`
    font-family: ${props => props.theme.fonts.secondary};
    color: ${props => props.theme.colors.white};

    @media (max-width: 600px){
        font-size: ${props => props.theme.sizes.small};
    }
`;

export const FormContent = styled.form`
    margin: 15px 0;

    @media (max-width: 600px){
        display: flex;
        flex-direction: column;
    }
`;

export const Input = styled.input`
    font-family: ${props => props.theme.fonts.secondary};
    border-radius: 5px;
    padding: 5px;
    border: none;
    outline: none;
    margin-right: 10px;

    @media (max-width: 600px){
        padding: 10px;
        margin-bottom: 10px;
        margin-right: 0;
    }
`;

export const Button = styled.button`
    border: none;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.sizes.small};
    background: ${props => props.theme.colors.secondary};
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: opacity .2s ease-in-out;

    @media (max-width: 600px){
        padding: 10px;
    }

    &:hover{
        opacity: .8;
    }
`;