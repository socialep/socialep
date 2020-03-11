import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import carousel1 from "../screens/carousel/carousel1";
import carousel2 from "../screens/carousel/carousel2";
import carousel3 from "../screens/carousel/carousel3";

//config
import defaultScreenOpts from '../config/defaultScreenOpts'

const CarouselStack = createStackNavigator();

const CarouselNav = () => {
  return (
    <CarouselStack.Navigator headerMode="none">
      <CarouselStack.Screen
        name="carousel1"
        component={carousel1}
        options={defaultScreenOpts}
      />
      <CarouselStack.Screen
        name="carousel2"
        component={carousel2}
        options={defaultScreenOpts}
      />
      <CarouselStack.Screen
        name="carousel3"
        component={carousel3}
        options={defaultScreenOpts}
      />
    </CarouselStack.Navigator>
  );
};

export default CarouselNav;
