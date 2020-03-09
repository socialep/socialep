import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import carousel1 from "../screens/carousel1";
import carousel2 from "../screens/carousel2";
import carousel3 from "../screens/carousel3";

const CarouselStack = createStackNavigator();

const CarouselNavigator = () => {
  return (
    <CarouselStack.Navigator headerMode="none">
      <CarouselStack.Screen
        name="carousel1"
        component={carousel1}
        options={defaultScreenOptions}
      />
      <CarouselStack.Screen
        name="carousel2"
        component={carousel2}
        options={defaultScreenOptions}
      />
      <CarouselStack.Screen
        name="carousel3"
        component={carousel3}
        options={defaultScreenOptions}
      />
    </CarouselStack.Navigator>
  );
};

export default CarouselNavigator;