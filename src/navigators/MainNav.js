import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import defaultScreenOpts from "../config/defaultScreenOpts";

//screens
import home from "../screens/home";

const MainStack = createStackNavigator();

export default MainNav = () => {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen
        name="home"
        component={home}
        options={defaultScreenOpts}
      />
    </MainStack.Navigator>
  );
};
