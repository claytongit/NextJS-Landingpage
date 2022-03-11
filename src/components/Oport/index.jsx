
import { Container, ContentImage, Content, Image, Image2, Marker, Title, Text } from './styled';

export default function Oport(){
    return(
        <Container>
            <ContentImage>
                <Image src="images/illustracao-01.png" alt="Imagem ilustrativa" />
                <Image2 src="images/illustracao-02.png" alt="Imagem ilustrativa" />
            </ContentImage>
            <Content>
                <Marker></Marker>
                <Title>Melhor oportunidade de negócios para você</Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Euismod egestas odio sapien dis massa massa massa. 
                    Accumsan, cras tristique adipiscing consectetur. 
                    Laoreet ante quisque in nulla eleifend neque sed rutrum donec.
                </Text>
            </Content>
        </Container>
    );
}