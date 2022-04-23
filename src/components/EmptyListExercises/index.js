import React from 'react';
import {View, Text} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import {Container, AlertText} from './styles.js';

export default function EmptyListExercises() {
  return (
    <Container style={{elevation: 15, borderRadius: 10}}>
      <Feather name="alert-triangle" color="red" size={80} />
      <AlertText>
        Ainda não foi feito nenhum exercicio para esse treino.
      </AlertText>
    </Container>
  );
}
