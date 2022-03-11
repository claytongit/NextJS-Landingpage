
import styled from 'styled-components';

export const Container = styled.div`
    display: none;

    @media (max-width: 1024px){
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        position: absolute;
        top: 10px;
    }

    @media (max-width: 600px){
        width: 100%;
        padding: 0 10px;
        top: 0;
        background: ${props => props.theme.colors.secondaryBase};
    }
`;


export const Image = styled.img`
    width: 134px;
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
`;


export const Title = styled.span`
    font-family: ${props => props.theme.fonts.secondary};
    font-size: ${props => props.theme.sizes.small};
    font-weight: bold;
    color: ${props => props.theme.colors.primaryBase};
    margin-right: 5px;

    @media (max-width: 600px){
        color: ${props => props.theme.colors.white};
    }
`;

export const ImageMenu = styled.img`
    width: ${props => props.theme.sizes.lead};

    @media (max-width: 600px){
        display: none;
    }
`;

export const ImageMenuMobile = styled.img`
    display: none;

    @media (max-width: 600px){
        display: block;
    }
`;