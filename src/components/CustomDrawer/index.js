import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {AuthContext} from '../../contexts/auth';

export default function CustomDrawer(props) {
  const {user, signOut} = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 25,
        }}>
        {/*<Image
          source={require("../../assets/account.png")}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />*/}
        <Text
          style={{
            color: '#000',
            fontSize: 18,
            marginTop: 5,
            fontFamily: 'Roboto-Regular',
          }}>
          Bem-vindo
        </Text>

        <Text
          style={{
            color: '#000',
            fontSize: 17,
            fontFamily: 'Roboto-Bold',
            paddingBottom: 25,
          }}>
          {user && user.name}
        </Text>
      </View>

      <DrawerItemList {...props} activeTintColor="#000" />

      <DrawerItem
        {...props}
        label="SAIR"
        inactiveBackgroundColor="#DE1414"
        inactiveTintColor= "#000"
        onPress={() => signOut()}
      />
      <Text
        style={{
          color: '#000',
          textAlign: 'center',
          fontFamily: 'Roboto-Regular',
          marginTop: '145%',
          fontSize: 13,
        }}>
        fitnessApp v0.0.1 - ALFA
      </Text>
    </DrawerContentScrollView>
  );
}
