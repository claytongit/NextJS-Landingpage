import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 185px;
    margin: 80px 0;

    @media (max-width: 1024px){
        padding: 0 70px;
    }

    @media (max-width: 600px){
        padding: 0 10px;
    }
`;

export const Title = styled.h2`
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.primaryDark};
    text-align: center;
`;

export const Content = styled.div`
    width: 100%;    
    min-height: auto;
    max-width: auto;
    padding: 5px 20px;
    margin-top: 100px;
    border-radius: 15px;
    background: ${props => props.theme.colors.secondaryBase};
`;

export const Details = styled.details`
    margin: 20px 0;

    &::-webkit-details-marker {
        display: none;
    }
`;

export const Summary = styled.summary`
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.white};
    cursor: pointer;

    &::-webkit-details-marker {
        display: none;
    }
`;

export const Text = styled.p`
    font-family: ${props => props.theme.fonts.secondary};
    font-size: ${props => props.theme.sizes.small};
    color: ${props => props.theme.colors.white};
    margin: 10px 0;
`;