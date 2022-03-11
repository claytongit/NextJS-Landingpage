
import { Title, Container, Content, Text, Maker, ContentCards, Cards, ImageCard, TitleCard, MakerCard, MakerCard2, TextCard, CardsBody } from './styled';

export default function Services(){
    return(
        <Container>
            <Content>
                <Maker></Maker>
                <Title>Melhores oportundades de negócios para você</Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod egestas odio sapien dis massa massa massa. 
                    Accumsan, cras tristique adipiscing consectetur. 
                    Laoreet ante quisque in nulla eleifend neque sed rutrum donec.
                </Text>
            </Content>
            <ContentCards>
                <Cards>
                    <ImageCard src="images/cursos.png" alt="" />
                    <CardsBody>
                        <TitleCard>Cursos profissionais</TitleCard>
                        <MakerCard></MakerCard>
                        <TextCard>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Euismod egestas odio sapien dis massa massa massa. 
                        </TextCard>
                    </CardsBody>
                </Cards>

                <Cards>
                    <ImageCard src="images/imersao.png" alt="" />
                    <CardsBody>
                        <TitleCard>Cursos profissionais</TitleCard>
                        <MakerCard></MakerCard>
                        <TextCard>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Euismod egestas odio sapien dis massa massa massa. 
                        </TextCard>
                    </CardsBody>
                </Cards>

                <Cards>
                    <ImageCard src="images/solucao.png" alt="" />
                    <CardsBody>
                        <TitleCard>Cursos profissionais</TitleCard>
                        <MakerCard2></MakerCard2>
                        <TextCard>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Euismod egestas odio sapien dis massa massa massa. 
                        </TextCard>
                    </CardsBody>
                </Cards>

                <Cards>
                    <ImageCard src="images/analise.png" alt="" />
                    <CardsBody>
                        <TitleCard>Cursos profissionais</TitleCard>
                        <MakerCard2></MakerCard2>
                        <TextCard>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Euismod egestas odio sapien dis massa massa massa. 
                        </TextCard>
                    </CardsBody>
                </Cards>
            </ContentCards>
        </Container>
    );
}