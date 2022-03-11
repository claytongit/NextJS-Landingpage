
import { signOut  } from "next-auth/react";

import { 
    Container, 
    Content, 
    Menu, 
    Midia, 
    Info, 
    TitleInfo, 
    Contact, 
    Email,
    MenuContent,
    TitleMenu,
    Link,
    ImageMidia,
    TextMidia,
    ContentLink,
    ContentMindia
} from './style';

export default function(){

    function handlSingOut(){
        signOut({
            callbackUrl: "/"
        });
    }

    return(
        <Container>           

            <Content>
                <Info>
                    <TitleInfo>Transit</TitleInfo>
                    <Contact>(11) 0000-0000</Contact>
                    <Email>contato@trasit.com</Email>
                </Info>

                <Menu>
                    <MenuContent>
                        <TitleMenu>Menu</TitleMenu>
                        <ContentLink>
                            <Link href="#" >Home</Link>
                            <Link href="#" >Serviços</Link>
                            <Link href="#" >Preços</Link>
                            <Link href="#" >Contato</Link>
                        </ContentLink>
                    </MenuContent>
                    <MenuContent>
                        <TitleMenu>Social</TitleMenu>
                        <ContentLink>
                            <Link href="#" >Twitter</Link>
                            <Link href="#" >Instagram</Link>
                            <Link href="#" >Facebook</Link>
                            <Link href="#" >Linkedin</Link>
                        </ContentLink>
                    </MenuContent>
                </Menu>
            </Content>  

            <hr />

            <ContentMindia>
                <Midia>
                    <ImageMidia src="images/facebook.png" alt="Imagem facebook" />
                    <ImageMidia src="images/twitter.png" alt="Imagem twitter" />
                    <ImageMidia src="images/instagram.png" alt="Imagem instagram" />
                    <TextMidia>2022 Infografic. Todos direitos reservados</TextMidia>
                    <Link href="#" onClick={handlSingOut}>SAIR</Link>
                </Midia>
            </ContentMindia>
        </Container>
    );
}