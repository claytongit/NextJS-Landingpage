
import { 
    Container, 
    Title, 
    Text, 
    Content, 
    CardLeft, 
    CardCenter, 
    CardRiht,
    Price,
    Plan,
    Descrition,
    List,
    Items,
    Image,
    Recurso
} from "./style";

export default function Planos(){
    return(
        <Container>
            <Title>Nossos planos para seu negócio</Title>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Euismod egestas odio sapien dis massa massa massa. 
                Accumsan, cras tristique adipiscing consectetur. 
                Laoreet ante quisque in nulla eleifend neque sed rutrum donec.
            </Text>
            <Content>
                
                <CardLeft>
                    <Price>R$29 <span>/mês</span></Price>
                    <Plan>Start</Plan>
                    <Descrition>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Descrition>
                    <List>
                        <Items>
                            <Image src="images/checkBase.png" alt="Imagem de check" />
                            <Recurso>Recursos start</Recurso>
                        </Items>
                        <Items>
                            <Image src="images/checkBase.png" alt="Imagem de check" />
                            <Recurso>Recursos start</Recurso>
                        </Items>
                        <Items>
                            <Image src="images/checkBase.png" alt="Imagem de check" />
                            <Recurso>Recursos start</Recurso>
                        </Items>
                    </List>
                </CardLeft>
                
                <CardCenter>
                    <Price style={{color: '#FFF'}}>R$180 <span style={{color: '#FFF'}} >/mês</span></Price>
                    <Plan  style={{color: '#FFF'}}>Pro</Plan>
                    <Descrition style={{color: '#FFF'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </Descrition>
                    <List>
                        <Items style={{color: '#FFF'}}>
                            <Image src="images/checkhite.png" alt="Imagem de check" />
                            <Recurso>Recursos start</Recurso>
                        </Items>
                        <Items style={{color: '#FFF'}}>
                            <Image src="images/checkhite.png" alt="Imagem de check" />
                            <Recurso>Recursos start</Recurso>
                        </Items>
                        <Items style={{color: '#FFF'}}>
                            <Image src="images/checkhite.png" alt="Imagem de check" />
                            <Recurso>Recursos start</Recurso>
                        </Items>
                    </List>
                </CardCenter>
                
                <CardRiht>
                    <Price>R$250 <span>/mês</span></Price>
                    <Plan>Expert</Plan>
                    <Descrition>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Descrition>
                    <List>
                        <Items>
                            <Image src="images/checkBase.png" alt="Imagem de check" />
                            <Recurso>Recursos start</Recurso>
                        </Items>
                        <Items>
                            <Image src="images/checkBase.png" alt="Imagem de check" />
                            <Recurso>Recursos start</Recurso>
                        </Items>
                        <Items>
                            <Image src="images/checkBase.png" alt="Imagem de check" />
                            <Recurso>Recursos start</Recurso>
                        </Items>
                    </List>
                </CardRiht>
            
            </Content>
        </Container>
    );
}