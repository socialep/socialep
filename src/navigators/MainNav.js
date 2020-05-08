import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import defaultScreenOpts from "../config/defaultScreenOpts";

//screens
import opportunity from "../screens/opportunity";

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
      <MainStack.Screen
        name="Opportunity"
        component={opportunity}
        options={defaultScreenOpts}
      />
    </MainStack.Navigator>
  );
};
