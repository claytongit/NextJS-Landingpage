
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { signIn  } from "next-auth/react";


import { Conteiner, Content, Image, Form, Label, Input, Button, Title, Error } from './style';

export default function Login(){
    const router = useRouter();
    const { register, handleSubmit } = useForm();

    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState('Logar');

    async function handleLogin(data){

        setLoading('Aguarde...');

        const { user, pass } = data;

        const response = await signIn('credentials', {
            user,
            pass,
            redirect: false
        });

        if(response.ok){
            router.push('/home');
        } 

        if(response.ok == false){
            setError('Usuarion ou senha invalido!');
            setLoading('Logar');
            return;
        }      
    }

    return(
        <Conteiner>
            <Content>
                <Image src="images/illustracao-02.png" alt="Imagem ilustrativa" />
            </Content>
            <Form onSubmit={ handleSubmit(handleLogin) }>
                <Title>Login</Title>
                <Label forName="user">Nome de usuario</Label>
                <Input 
                    { ...register('user') }
                    type="text" 
                    name="user" 
                    id="user" 
                    placeholder="admin"
                />
                <Label forName="user">Informe a Senha</Label>
                <Input 
                    { ...register('pass') }
                    type="password" 
                    name="pass" 
                    id="pass" 
                />
                <Error>{ error }</Error>
                <Button type="submit">{loading}</Button>
            </Form>
        </Conteiner>
    );
}