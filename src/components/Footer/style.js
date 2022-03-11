
import styled from 'styled-components';

export const Container = styled.div`
    height: 450px;
    padding: 0 185px;
    padding-bottom: 20px;
    margin-top: 80px;
    position: relative;
    background-image: url('images/bg-5.png');
    background-size: contain;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media (max-width: 1024px){
        padding: 0 70px;
    }

    @media (max-width: 600px){
        padding: 0 10px;
        background-image: none;
        margin-top: 0;
        height: auto;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`;

export const Info = styled.div`

    @media (max-width: 600px){
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`;

export const Menu = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 600px){
        display: none;
    }
`;

export const ContentMindia = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;

export const Midia = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;

    @media (max-width: 600px){
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const TitleInfo = styled.h3`
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.sizes.display};
    color: ${props => props.theme.colors.white};

    @media (max-width: 600px){
        color: ${props => props.theme.colors.primaryDark};
    }
`;

export const Contact = styled.p`
    font-family: ${props => props.theme.fonts.secondary};
    font-size: ${props => props.theme.sizes.small};
    color: ${props => props.theme.colors.white};
    margin: 10px 0;

    @media (max-width: 600px){
        color: ${props => props.theme.colors.primaryDark};
    }
`;

export const Email = styled.p`
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.sizes.small};
    color: ${props => props.theme.colors.white};
    font-weight: bold;

    @media (max-width: 600px){
        color: ${props => props.theme.colors.primaryDark};
    }
`;

export const MenuContent = styled.div`
    
`;

export const TitleMenu = styled.h3`
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.sizes.body};
    margin-bottom: 10px;
`;

export const ContentLink = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Link = styled.a`
    font-family: ${props => props.theme.fonts.secondary};
    font-size: ${props => props.theme.sizes.small};
    color: ${props => props.theme.colors.primaryDark};
    text-decoration: none;
    margin-right: 80px;
    margin-bottom: 10px;
`;

export const ImageMidia = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
`;

export const TextMidia = styled.p`
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.sizes.small};
    color: ${props => props.theme.colors.primaryDark};

    @media (max-width: 600px){
        margin: 10px 0;
    }
`;