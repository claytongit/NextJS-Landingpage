
import { Container, Content, Maker, Title, Text, ContentImage, Image, ImageBg } from './style.js';

export default function Rendimended(){
    return(
        <Container>
            <Content>
                <Maker></Maker>
                <Title>Melhores oportunidades de negócio para você</Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Euismod egestas odio sapien dis massa massa massa. 
                    Accumsan, cras tristique adipiscing consectetur. 
                    Laoreet ante quisque in nulla eleifend neque sed rutrum donec.
                </Text>
            </Content>
            <ContentImage>
                <Image src="images/illustracao-03.png" alt="Imagem ilustrativa" />
            </ContentImage>
            <ImageBg src="images/bg-04.png" alt="Imagem de bg da sessao" />
        </Container>
    );
}