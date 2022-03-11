import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 0 185px;
    height: 800px;
    position: relative;

    display: flex;
    align-items: center;

    @media (max-width: 1024px){
        padding: 0 70px;
    }

    @media (max-width: 600px){
        height: auto;
        padding: 0 10px;
        flex-direction: column-reverse;
    }
`;

export const ImageBg = styled.img`
    position: absolute;
    top: 0;
    right: 0;

    @media (max-width: 1024px){
        width: 580px;
    }

    @media (max-width: 600px){
        display: none;
    }
`;

export const Content = styled.div`
    width: 60%;
    z-index: 2;

    @media (max-width: 1024px){
        width: 50%;
    }

    @media (max-width: 600px){
        width: 100%;
    }
`;

export const Title = styled.h1`
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.sizes.lead};
    color: ${props => props.theme.colors.primaryDark};
    margin: 30px 0;
`;

export const Text = styled.p`
    font-family: ${props => props.theme.fonts.secondary};
    font-size: ${props => props.theme.sizes.small};
    color: ${props => props.theme.colors.primaryDark};
`;

export const ContentImage = styled.div`
    width: 50%;
    z-index: 1;

    display: flex;
    justify-content: flex-start;

    @media (max-width: 1024px){
        margin-left: 50px;
    }

    @media (max-width: 600px){
        width: 100%;
        background: ${props => props.theme.colors.secondaryBase};
        margin-left: 0;
        margin-bottom: 30px;
    }
`;

export const Image = styled.img`

    @media (max-width: 1024px){
        width: 100%;
    }
`;

export const Maker = styled.div`
    width: 50px;
    height: 5px;
    background-color: ${props => props.theme.colors.primaryBase};
`;