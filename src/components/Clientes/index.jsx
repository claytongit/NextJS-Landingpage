import { Container, Title, Content, Image } from './style';

export default function Clientes(){
    return(
        <Container>
            <Title>Nossos clientes</Title>
            <Content>
                <Image src="images/Company-01.png" alt="Imagem de patrocinio" />
                <Image src="images/Company-02.png" alt="Imagem de patrocinio" />
                <Image src="images/Company-03.png" alt="Imagem de patrocinio" />
                <Image src="images/Company-04.png" alt="Imagem de patrocinio" />
                <Image src="images/Company-05.png" alt="Imagem de patrocinio" />
            </Content>
        </Container>
    );
}