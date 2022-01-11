import React from 'react';
import {Text, View, Platform} from 'react-native';

import { useNavigation } from "@react-navigation/native";

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

  return (
    <Container>
      <Ballon />
      <Logo source={require('../../assets/images/logo.png')} />
      <Title style={{fontFamily: 'TulpenOne-Regular'}}>fitnessApp</Title>

      <AreaLogin style={{elevation: 25}}>
        <AreaInput>
          <Label style={{fontFamily: 'Roboto-Bold'}}>EMAIL:</Label>
          <Input placeholder="EMAIL" />
          <Label style={{fontFamily: 'Roboto-Bold'}}>SENHA:</Label>
          <Input placeholder="SENHA" />
        </AreaInput>
        <ButtonLogin>
          <TextButtonLogin style={{fontFamily: 'Roboto-Bold'}}>
            Acessar
          </TextButtonLogin>
        </ButtonLogin>
        <Legend style={{fontFamily: 'Roboto-Bold'}}>
          Ainda não faz parte do FitnessApp?
        </Legend>
        <Button onPress={()=> navigation.navigate("SignUp")}>
          <TextButton style={{fontFamily: 'Roboto-Bold'}}>
            CADASTRE-SE
          </TextButton>
        </Button>
      </AreaLogin>
    </Container>
  );
}
