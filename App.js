import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import OneSignal from 'react-native-onesignal';

import AuthProvider from './src/contexts/auth';

import Routes from './src/routes';

//24cd6ad9-8228-40cf-8f8e-1b98f113e493

export default function App() {
  useEffect(() => {
    //OneSignal Init Code
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId('24cd6ad9-8228-40cf-8f8e-1b98f113e493');
    //END OneSignal Init Code
    
    
    /*OneSignal.init('24cd6ad9-8228-40cf-8f8e-1b98f113e493');
OneSignal.setNotificationOpenedHandler(notification => {
      console.log("OneSignal: notification opened:", notification);
    });
    OneSignal.addEventListener('opened', onOpened);

    return () => OneSignal.removeEventListener('opened', onOpened);*/
  }, []);

  function onOpened(result) {
    console.log('Mensagem: ', result.notification.payload.body);
    console.log('Result: ', result);
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
          backgroundColor="#DE1414"
          barStyle="light-content"
          translucent={false}
        />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
