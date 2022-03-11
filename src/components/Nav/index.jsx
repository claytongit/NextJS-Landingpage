
import { Container, Link, Imagem, Button, Item } from './style';

export default function Nav(){
    return(
        <Container>
            <Imagem src="images/logo.png" alt="imagem ilustrativa" />
            <Link>
                <Item>Item 01</Item>
                <Item>Item 02</Item>
                <Item>Item 03</Item>
                <Item>Item 04</Item>
            </Link>
            <Button>Comprar</Button>
        </Container>
    );
}