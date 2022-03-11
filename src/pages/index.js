
import { ThemeProvider } from 'styled-components';
import Login from '../components/Login';

import { GlobalStyled } from './styles/global';
import { theme } from './styles/styleProps';

export default function Home() {
    return(
      <ThemeProvider theme={ theme }>
        <GlobalStyled />
        <Login />
      </ThemeProvider>
    );
  }