import styled from 'styled-components';


export const Container = styled.div`
    padding: 0 185px;
    margin: 80px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1024px){
        padding: 0 70px;
    }

    @media (max-width: 600px){
        padding: 0 10px;
    }
`;

export const Title = styled.h2`
    text-align: center;
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.primaryDark};
    margin-bottom: 50px;
`;

export const Image = styled.img`
    width: 80%;

    @media (max-width: 600px){
        width: 100%;
    }
`;