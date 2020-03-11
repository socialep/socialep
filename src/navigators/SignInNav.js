import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import defaultScreenOpts from "../config/defaultScreenOpts";

//screens
import signIn from "../screens/signIn";
import signUp from "../screens/signUp";

const SignInStack = createStackNavigator();

export default SignInNav = () => {
  return (
    <SignInStack.Navigator headerMode="none">
      <SignInStack.Screen
        name="signIn"
        component={signIn}
        options={defaultScreenOpts}
      />
      <SignInStack.Screen
        name="signUp"
        component={signUp}
        options={defaultScreenOpts}
      />
    </SignInStack.Navigator>
  );
};
