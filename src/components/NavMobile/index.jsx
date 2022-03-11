
import { Container, Image, Menu, Title, ImageMenu, ImageMenuMobile } from './styled';

export default function NavMobile(){
    return(
        <Container>
            <Image src="images/logo.png" alt="Imagem ilustrativa" />

            <Menu>
                <Title>Menu</Title>
                <ImageMenu src="images/menu.png" alt="Imagem do menu" />
                <ImageMenuMobile src="images/menu-02.png" alt="Imagem do menu" />
            </Menu>
        </Container>
    );
}