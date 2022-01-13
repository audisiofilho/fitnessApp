import React, {useContext, useState} from 'react';
import {Text, View, Platform, ActivityIndicator} from 'react-native';

import {AuthContext} from '../../contexts/auth';

import {
  Container,
  AreaInput,
  Label,
  AreaLogin,
  Input,
  ButtonLogin,
  TextButtonLogin,
} from './styles';

export default function SignUp() {
  const {signUpUser, SignIn, loadingAuth} = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp() {
    if (name === '' || email === '' || password === '') {
      alert('Preencha todos os campos!');
      return;
    }
    signUpUser(email, password, name);
  }

  return (
    <Container>
      <AreaLogin style={{elevation: 25}}>
        <AreaInput>
          <Label style={{fontFamily: 'Roboto-Bold'}}>NOME:</Label>
          <Input
            value={name}
            onChangeText={text => setName(text)}
            placeholder="Nome"
          />
          <Label style={{fontFamily: 'Roboto-Bold'}}>EMAIL:</Label>
          <Input
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="email@email.com"
          />
          <Label style={{fontFamily: 'Roboto-Bold'}}>SENHA:</Label>
          <Input
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="**********"
          />
        </AreaInput>
        <ButtonLogin onPress={handleSignUp}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <TextButtonLogin style={{fontFamily: 'Roboto-Bold'}}>
              Cadastrar
            </TextButtonLogin>
          )}
        </ButtonLogin>
      </AreaLogin>
    </Container>
  );
}
