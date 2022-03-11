
import styled from "styled-components";

export const Container = styled.div`
    padding: 0 185px;
    margin-top: 80px;

    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px){
        padding: 0 70px;
        flex-direction: column;
    }

    @media (max-width: 600px){
        padding: 0 10px;
    }
`;

export const Title = styled.h1`
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.sizes.lead};
    color: ${props => props.theme.colors.primaryDark};
    margin: 30px 0;
`;

export const Content = styled.div`
    width: 40%;

    @media (max-width: 1024px){
        width: 100%;
        margin-bottom: 50px;
    }
`;

export const Text = styled.p`
    font-family: ${props => props.theme.fonts.secondary};
    font-size: ${props => props.theme.sizes.small};
    color: ${props => props.theme.colors.primaryDark};
`;

export const Maker = styled.div`
    width: 50px;
    height: 5px;
    background-color: ${props => props.theme.colors.primaryBase};
`;

export const ContentCards = styled.div`
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

    @media (max-width: 1024px){
        width: 100%;
        justify-content: space-between;
    }
`;

export const Cards = styled.div`
    width: 35%;
    margin: 0 20px;
    margin-bottom: 50px;

    @media (max-width: 1024px){
        width: 40%;
    }

    @media (max-width: 600px){
        width: 100%;
        display: flex;
        margin: 20px 0;
    }
`;

export const ImageCard = styled.img`
    margin-bottom: 15px;

    @media (max-width: 600px){
        width: 78px;
        height: 78px;
    }
`;

export const TitleCard = styled.h3`
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.sizes.small};
    color: ${props => props.theme.colors.primaryDark};
`;

export const MakerCard = styled.div`
    width: 70px;
    height: 5px;
    margin: 15px 0;
    background-color: ${props => props.theme.colors.primaryBase};
`;

export const MakerCard2 = styled.div`
    width: 70px;
    height: 5px;
    margin: 15px 0;
    background-color: ${props => props.theme.colors.secondary};
`;

export const TextCard = styled.p`
    font-family: ${props => props.theme.fonts.secondary};
    font-size: ${props => props.theme.sizes.small};
    color: ${props => props.theme.colors.primaryDark};
`;

export const CardsBody = styled.div`
    
    @media (max-width: 600px){
        width: 100%;
        margin-left: 15px;
    }
`;
