
import styled from "styled-components";

export const Container = styled.div`
    padding: 0 185px;
    margin-top: -400px;
    height: 800px;
    background-image: url('images/bg-03.png');
    background-repeat: no-repeat;

    display: flex;

    @media (max-width: 1024px){
        height: auto;
        padding: 0 70px;
        margin-top: 0;
        background-image: none;
    }

    @media (max-width: 600px){
        padding: 0 10px;
        margin: 50px 0;
        flex-direction: column;
    }
`;

export const Content = styled.div`
    width: 50%;
    height: 800px;
    padding-left: 40px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media (max-width: 1024px){
        height: auto;
        justify-content: center;
        padding-left: 0;
        padding-right: 100px;
    }

    @media (max-width: 600px){
        width: 100%;
        padding-right: 0;
    }
`;

export const ContentImage = styled.div`
    height: 800px;
    display: flex;
    align-items: center;

    @media (max-width: 1024px){
        width: 50%;
        height: auto;
        align-items: start;
        justify-content: center;
    }

    @media (max-width: 600px){
        width: 100%;
    }
`;

export const Image = styled.img`
    width: 105%;

    @media (max-width: 1024px){
        display: none;
    }
`;

export const Image2 = styled.img`
    display: none;

    @media (max-width: 1024px){
        width: 100%;
        display: block;
    }
`;

export const Marker = styled.div`
    width: 50px;
    height: 5px;
    background-color: ${props => props.theme.colors.primaryBase};
`;

export const Title = styled.h3`
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.sizes.lead};
    color: ${props => props.theme.colors.primaryDark};
    margin: 30px 0;
`;

export const Text = styled.p`    
    font-family: ${props => props.theme.fonts.secondary};
    font-size: ${props => props.theme.sizes.small};
    color: ${props => props.theme.colors.primaryDark};
    margin-bottom: 100px;

    @media (max-width: 1024px){
        margin-bottom: 0;
    }
`;