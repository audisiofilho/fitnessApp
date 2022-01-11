import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Stack = createStackNavigator();

function AuthRoutes() {
 return (
   <Stack.Navigator>
       <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
       <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerStyle: {
            backgroundColor: "#de1414"
          },
          headerTintColor: "#000",
          headerBackTitleVisible: false,
          headerTitle: "Voltar",
        }}
      />
   </Stack.Navigator>
  );
}

export default AuthRoutes;