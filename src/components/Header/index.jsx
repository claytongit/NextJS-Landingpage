
import { Container, Content, SubTitle, Title, Text, Button, ContentImage, Image } from './style';

import Nav from '../Nav';
import NavMobile from '../NavMobile';

export default function Header(){
    return(
        <Container>
            <Nav />
            <NavMobile />
            <Content>
                <SubTitle>Bem vindo á Transit.</SubTitle>
                <Title>Trasformando ações em oportunidades</Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Euismod egestas odio sapien dis massa massa massa. Accumsan, cras tristique adipiscing consectetur. 
                    Laoreet ante quisque in nulla eleifend neque sed rutrum donec.
                </Text>
                <Button>Saiba mais</Button>
            </Content>
            <ContentImage>
                <Image src="images/imagem-01.png" alt="Imagem ilustrativa do banner" />
            </ContentImage>
        </Container>
    );
}