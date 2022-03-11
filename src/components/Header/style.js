import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 170px;
    height: 650px;
    position: relative;

    display: flex;
    align-items: center;

    background-image: url('images/bg-01.png');
    background-size: contain;
    background-repeat: no-repeat;

    @media (max-width: 1024px){
        height: 500px;
        padding: 0 50px;
    }

    @media (max-width: 600px){
        width: 100%;
        height: auto;
        padding: 0;
        flex-direction: column-reverse;
        background-image: none;
    }
`;

export const Content = styled.div`
    width: 40%;
    padding: 0 15px;

    @media (max-width: 1024px){
        width: 50%;
    }

    @media (max-width: 600px){
        width: 100%;
        height: auto;
        padding: 10px;
    }
`;

export const SubTitle = styled.p`
    font-family: ${props => props.theme.fonts.secondary};
    font-size: ${props => props.theme.sizes.body};
    color: ${props => props.theme.colors.white};

    @media (max-width: 600px){
        color: ${props => props.theme.colors.primaryDark};
        font-size: ${props => props.theme.sizes.lead};
    }
`;

export const Title = styled.h1`
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.sizes.display};
    color: ${props => props.theme.colors.white};
    margin: 20px 0;

    @media (max-width: 1024px){
        font-size: ${props => props.theme.sizes.lead};
    }

    @media (max-width: 600px){
        color: ${props => props.theme.colors.primaryDark};
        font-size: ${props => props.theme.sizes.display};
    }
`;

export const Text = styled.p`
    font-family: ${props => props.theme.fonts.secondary};
    font-size: ${props => props.theme.sizes.small};
    color: ${props => props.theme.colors.white};

    @media (max-width: 600px){
        color: ${props => props.theme.colors.primaryDark};
        font-size: ${props => props.theme.sizes.lead};
    }
`;

export const Button = styled.button`
    width: 150px;
    height: 50px;
    margin-top: 10px;
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.primaryBase};
    font-family: ${props => props.theme.fonts.primary};
    border: none;
    border-radius: 5px;
    transition: opacity .2s ease-in-out;
    cursor: pointer;

    @media (max-width: 1024px){
        width: 150px;
        height: 40px;
    }

    @media (max-width: 600px){
        width: 100%;
        height: 50px;
        background: ${props => props.theme.colors.secondaryBase};
        color: ${props => props.theme.colors.white};
    }

    &:hover{
        opacity: .8;
    }
`;

export const ContentImage = styled.div`
    width: 60%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    @media (max-width: 600px){
        width: 95%;
        height: 400px;
        margin-top: 80px;
        margin-bottom: 15px;

        background-image: url('images/imagem-mobile-01.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
`;

export const Image = styled.img`
    width: 87%;

    @media (max-width: 1024px){
        width: 100%;
    }

    @media (max-width: 600px){
        display: none;
    }
`;