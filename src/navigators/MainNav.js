import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import defaultScreenOpts from "../config/defaultScreenOpts";

//screens

//navigators
import TabNav from "./TabNav";

const MainStack = createStackNavigator();

export default MainNav = () => {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen
        name="TabNav"
        component={TabNav}
        options={defaultScreenOpts}
      />
    </MainStack.Navigator>
  );
};
