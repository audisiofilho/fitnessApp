import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import storage from '@react-native-firebase/storage';

import {AuthContext} from '../../contexts/auth';
import Feather from 'react-native-vector-icons/Feather';
import {HeaderDrawer} from './styles';
import {useNavigation, DrawerActions} from '@react-navigation/native';

export default function CustomDrawer(props) {
  const navigation = useNavigation();
  const {user, signOut} = useContext(AuthContext);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    let isActive = true;

    async function loadAvatar() {
      try {
        if (isActive) {
          let response = await storage()
            .ref('users')
            .child(user?.uid)
            .getDownloadURL();
          setUrl(response);
        }
      } catch (err) {
        console.log('Não encontramos nenhuma foto');
      }
    }

    loadAvatar();

    return () => (isActive = false);
  }, []);
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 25,
        }}>
        <HeaderDrawer style={{elevation: 15}}>
          <TouchableWithoutFeedback
            onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
            <Feather name="x" size={35} color="#ffffff" />
          </TouchableWithoutFeedback>
        </HeaderDrawer>
        {url ? (
          <Image
            source={{uri: url}}
            style={{
              width: 100,
              height: 100,
              borderColor: 'black',
              borderRadius: 50,
              borderWidth: 2,
            }}
          />
        ) : (
          <Image
            source={require('../../assets/images/avatar.png')}
            style={{width: 100, height: 100}}
            //resizeMode="contain"
          />
        )}
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

      <Text
        style={{
          color: '#000',
          textAlign: 'center',
          fontFamily: 'Roboto-Regular',
          marginTop: '105%',
          fontSize: 13,
        }}>
        fitnessApp v0.0.1 - ALFA
      </Text>
      <TouchableOpacity
        onPress={() => signOut()}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginRight: 10,
          marginTop: 20,
        }}>
        <Feather name="power" size={22} color="#000000" />
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#000000',
            marginLeft: 5,
          }}>
          SAIR
        </Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}
