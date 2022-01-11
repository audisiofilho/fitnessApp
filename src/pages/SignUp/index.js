import React from 'react';
import {Text, View, Platform} from 'react-native';

import DropShadow from 'react-native-drop-shadow';

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
  return (
    <Container>
      <AreaLogin style={{elevation: 25}}>
        <AreaInput>
          <Label style={{fontFamily: 'Roboto-Bold'}}>USUÁRIO:</Label>
          <Input placeholder="USUÁRIO" />
          <Label style={{fontFamily: 'Roboto-Bold'}}>EMAIL:</Label>
          <Input placeholder="EMAIL" />
          <Label style={{fontFamily: 'Roboto-Bold'}}>SENHA:</Label>
          <Input placeholder="SENHA" />
        </AreaInput>
        <ButtonLogin>
          <TextButtonLogin style={{fontFamily: 'Roboto-Bold'}}>
            Cadastrar
          </TextButtonLogin>
        </ButtonLogin>
      </AreaLogin>
    </Container>
  );
}
