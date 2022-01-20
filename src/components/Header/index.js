import React from 'react';
import { View } from 'react-native';
import  Feather from "react-native-vector-icons/Feather";
import { useNavigation, DrawerActions } from "@react-navigation/native";

import {Container, ButtonMenu, ContainerLogo, Logo, Title} from "./styles";

export default function Header() {
    const navigation = useNavigation();
 return (
   <Container style={{elevation: 30}}>
       <ButtonMenu onPress={ () => navigation.dispatch(DrawerActions.openDrawer()) }>
            <Feather name='menu' color="#fff" size={35}/>
       </ButtonMenu>
       <ContainerLogo>
           <Logo source={require('../../assets/images/logo.png')} />
           <Title style={{fontFamily: 'TulpenOne-Regular'}}>fitnessApp</Title>
       </ContainerLogo>
   </Container>
  );
}