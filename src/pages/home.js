import { useSession, getSession } from "next-auth/react";
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';

import { GlobalStyled } from './styles/global';
import { theme } from './styles/styleProps';

import Header from '../components/Header';
import Services from '../components/Services';
import Oport from '../components/Oport';
import Rendimended from '../components/Rendimended';
import Video from '../components/Video';
import Planos from '../components/Planos';
import Clientes from '../components/Clientes';
import Form from '../components/Form';
import Doubt from '../components/Doubt';
import Footer from '../components/Footer';

export default function Home() {

  const { data: session, status } = useSession();

  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;

  if(status == 'unauthenticated'){
    router.push("/");
  }

  return(
    <ThemeProvider theme={ theme }>
      <GlobalStyled />
      <Header />
      <Services />
      <Oport />
      <Rendimended />
      <Video />
      <Planos />
      <Clientes />
      <Form />
      <Doubt />
      <Footer />
    </ThemeProvider>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  
  if(!session){
    return{
        props: {},
        redirect: {
            destination: '/'
        }
    }
  }

  return{
    props: {}
  }
}