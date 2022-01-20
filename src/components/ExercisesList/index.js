import React from 'react';
import {View, Text} from 'react-native';

import {Container, TextList, Icon} from './styles';

export default function ExercisesList({data}) {
  return (
    <Container style={{elevation: 15}}>
      <TextList style={{fontFamily: 'Roboto-Bold'}}>{data.name}</TextList>
      <TextList style={{fontFamily: 'Roboto-Bold'}}>{data.series}</TextList>
      <Icon source={{uri: data.image}} />
    </Container>
  );
}
