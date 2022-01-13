import React, {useContext, useState} from 'react';
import {Text, View, Platform, ActivityIndicator} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {AuthContext} from '../../contexts/auth';

import {
  Container,
  Ballon,
  Logo,
  Title,
  AreaInput,
  Label,
  AreaLogin,
  Input,
  ButtonLogin,
  TextButtonLogin,
  Legend,
  Button,
  TextButton,
} from './styles';

export default function Login() {
  const navigation = useNavigation();

  const {signInUser, loadingAuth} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    if (email === '' || password === '') {
      alert('Preencha todos os campos!');
      return;
    }
    signInUser(email, password);
  }

  return (
    <Container>
      <Ballon />
      <Logo source={require('../../assets/images/logo.png')} />
      <Title style={{fontFamily: 'TulpenOne-Regular'}}>fitnessApp</Title>

      <AreaLogin style={{elevation: 25}}>
        <AreaInput>
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
            secureTextEntry={true}
          />
        </AreaInput>
        <ButtonLogin onPress={handleSignIn}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <TextButtonLogin style={{fontFamily: 'Roboto-Bold'}}>
              Acessar
            </TextButtonLogin>
          )}
        </ButtonLogin>
        <Legend style={{fontFamily: 'Roboto-Bold'}}>
          Ainda não faz parte do FitnessApp?
        </Legend>
        <Button onPress={() => navigation.navigate('SignUp')}>
          <TextButton style={{fontFamily: 'Roboto-Bold'}}>
            CADASTRE-SE
          </TextButton>
        </Button>
      </AreaLogin>
    </Container>
  );
}
