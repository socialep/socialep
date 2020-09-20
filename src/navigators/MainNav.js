import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import defaultScreenOpts from "../config/defaultScreenOpts";

//screens
import opportunity from "../screens/opportunity";
import register from "../screens/register";
import thanksForRegister from "../screens/thanksForRegister";
import organization from "../screens/organization";
import editProfile from "../screens/editProfile";

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
      <MainStack.Screen
        name="Register"
        component={register}
        options={defaultScreenOpts}
      />
      <MainStack.Screen
        name="ThanksForRegister"
        component={thanksForRegister}
        options={defaultScreenOpts}
      />
      <MainStack.Screen
        name="Organization"
        component={organization}
        options={defaultScreenOpts}
      />
      <MainStack.Screen
        name="EditProfile"
        component={editProfile}
        options={defaultScreenOpts}
      />
    </MainStack.Navigator>
  );
};
