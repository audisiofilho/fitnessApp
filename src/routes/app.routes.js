import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import CustomDrawer from "../components/CustomDrawer";


const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <AppDrawer.Navigator
      drawerContent={ (props)=> <CustomDrawer {...props}/>}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#FFFFFF',
          width: 240,
        },
        drawerLabelStyle: {
          fontWeight: "bold",
        },
        drawerActiveTintColor: "#FFF",
        drawerActiveBackgroundColor: "#132743",
        drawerInactiveBackgroundColor: "#DE1414",
        drawerInactiveTintColor: "#000",
        drawerItemStyle:{
            marginVertical: 5,
        },
        headerShown:false
      }}
    >
      <AppDrawer.Screen name="Home" component={Home} headerShown={false} />
      <AppDrawer.Screen name="Profile" component={Profile} />
    </AppDrawer.Navigator>
  );
}

export default AppRoutes;