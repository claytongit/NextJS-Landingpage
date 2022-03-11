
import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 185px;

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
    margin: 50px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Image = styled.img``;