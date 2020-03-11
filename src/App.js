import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import { BreadProvider } from "material-bread";

//REDUX
import { Provider } from "react-redux";
import Store from "./redux/store";
import { setStrings } from "./redux/actions/uiActions";

//UTILS
import isIPhoneX from "./utils/isIPhoneX";
import strings from "./utils/strings";

//COLORS
import { colorPrimary } from "./utils/colors";

//NAVIGATORS
import { NavigationContainer } from "@react-navigation/native";
import RootNav from "./navigators/RootNav";

Store.dispatch(setStrings(strings("pt-br")));

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

const App = () => {
  if (isIPhoneX())
    return (
      <Provider store={Store}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{ flex: 0, backgroundColor: colorPrimary }} />
        <SafeAreaView style={{ flex: 1, backgroundColor: colorPrimary }}>
          <NavigationContainer>
            <BreadProvider>
              <RootNav />
            </BreadProvider>
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    );
  return (
    <Provider store={Store}>
      <View
        style={{ backgroundColor: colorPrimary, height: STATUS_BAR_HEIGHT }}
      >
        <StatusBar
          translucent={false}
          barStyle="default"
          backgroundColor={colorPrimary}
        />
      </View>
      <NavigationContainer>
        <BreadProvider>
          <RootNav />
        </BreadProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
