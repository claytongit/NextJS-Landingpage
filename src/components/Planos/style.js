import styled from "styled-components";

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
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.primaryDark};
    margin-bottom: 30px;
`;

export const Text = styled.p`
    text-align: center;
    font-family: ${props => props.theme.fonts.secondary};
    font-size: ${props => props.theme.sizes.body};
    color: ${props => props.theme.colors.primaryDark};
`;

export const Content = styled.div`
    width: 100%;
    margin-top: 100px;
    padding: 0 150px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px){
        flex-direction: column;
        margin-top: 50px;
    }
`;

export const CardLeft = styled.div`
    width: 320px;
    height: auto;
    border-radius: 16px 0px 0px 16px;
    border: 1px solid #CCC;
    padding: 20px;

    @media (max-width: 600px){
        border-radius: 16px;
    }
`;

export const CardCenter = styled.div`
    width: 320px;
    height: auto;
    border-radius: 16px;
    background-color: ${props => props.theme.colors.primaryBase};
    padding: 40px 20px;

    @media (max-width: 600px){
        padding: 20px;
        margin: 10px 0;
    }
`;

export const CardRiht = styled.div`
    width: 320px;
    height: auto;
    border-radius: 0px 16px 16px 0px;
    border: 1px solid #CCC;
    padding: 20px;

    @media (max-width: 600px){
        border-radius: 16px;
    }
`;

export const Price = styled.h4`
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.primaryBase};
    font-size: ${props => props.theme.sizes.body};

    span{
        font-size: ${props => props.theme.sizes.smallLest};
        font-family: ${props => props.theme.fonts.secondary};
        color: ${props => props.theme.colors.primaryDark};
    }
`;

export const Plan = styled.h4`
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.primaryDark};
    font-size: ${props => props.theme.sizes.body};
    margin-top: 10px;
`;

export const Descrition = styled.p`
    font-family: ${props => props.theme.fonts.secondary};
    color: ${props => props.theme.colors.primaryDark};
    font-size: ${props => props.theme.sizes.small};
    margin-top: 10px;
`;

export const List = styled.ul`
    list-style: none;
`;

export const Items = styled.li`
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.primaryDark};
    font-size: ${props => props.theme.sizes.smallLest};

    margin: 10px 0;

    display: flex;
    align-items: center;
`;

export const Image = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`;

export const Recurso = styled.p``;