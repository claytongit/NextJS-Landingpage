
import { Container, ImageDesktop, ImageTablet, ImageMobile, Title, FormContent, Input, Button, Text, Content } from './style';

export default function Form(){
    return(
        <Container>            
            <Content>
                <Title>Assine nossa Newsletter</Title>
                <FormContent>
                    <Input 
                        type="text" 
                        name="" 
                        id=""
                        placeholder="Nome"
                    />
                    <Input 
                        type="email" 
                        name="" 
                        id=""
                        placeholder="Seu melhor e-mail"
                    />
                    <Button type="submit">Enviar</Button>
                </FormContent>
                <Text>Seja o primeiro da fila a receber insights</Text>
            </Content>
            {/* <ImageDesktop src="images/efeito.png" alt="Imagem ilustrativa" />
            <ImageTablet src="images/efeito-02.png" alt="Imagem ilustrativa" />
            <ImageMobile src="images/efeito-03.png" alt="Imagem ilustrativa" /> */}
        </Container>
    );
}