import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "material-bread";

//screens
import home from "../screens/home";
import favorites from "../screens/favorites";
import news from "../screens/news";
import userProfile from "../screens/userProfile";

import {
  colorLightGrayBg,
  colorFocused,
  colorUnselected,
} from "../utils/colors";

const Tab = createBottomTabNavigator();

export default TabNav = (props) => {
  const { navigation } = props;

  const tabOptions = {
    style: {
      backgroundColor: colorLightGrayBg,
    },
    labelStyle: { display: "none" },
    tabStyle: {},
    activeTintColor: colorFocused,
    inactiveTintColor: colorUnselected,
  };

  const screenOpts = ({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      let iconName;

      if (route.name === "home") iconName = "explore";
      else if (route.name === "news") iconName = "forum";
      else if (route.name === "favorites") iconName = "favorite";
      else if (route.name === "userProfile") iconName = "person";

      // You can return any component that you like here!
      return <Icon name={iconName} size={size} color={color} />;
    },
  });

  const options = {
    tabBarLabel: "",
  };

  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={tabOptions}
      screenOptions={screenOpts}
    >
      <Tab.Screen options={options} name="favorites" component={favorites} />
      <Tab.Screen options={options} name="home" component={home} />
      <Tab.Screen options={options} name="news" component={news} />
      <Tab.Screen
        options={options}
        name="userProfile"
        component={userProfile}
      />
    </Tab.Navigator>
  );
};
