import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@300;400&family=Smooch+Sans&display=swap');
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #f7f7f7;
    }

    h1{
        font-family: ${props => props.theme.fonts.secondary};
    }
`;