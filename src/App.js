import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { BreadProvider } from "material-bread";
import * as firebase from "firebase";

//REDUX
import { Provider } from "react-redux";
import Store from "./redux/store";
import { setStrings } from "./redux/actions/uiActions";
import { getUserData } from "./redux/actions/userActions";

//UTILS
import isIPhoneX from "./utils/isIPhoneX";
import strings from "./utils/strings";
import firebaseConfig from "./config/firebaseConfig";

//COLORS
import { colorPrimaryDarker } from "./utils/colors";

//NAVIGATORS
import { NavigationContainer } from "@react-navigation/native";
import RootNav from "./navigators/RootNav";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

firebase.auth().onAuthStateChanged((user) => {
  const userData = {
    uid: user.uid,
    name: user.displayName,
    email: user.providerData[0].email,
    photo: user.photoURL,
  };
  if (user) Store.dispatch(getUserData(userData));
});

Store.dispatch(setStrings(strings("pt-br")));

const App = () => {
  if (isIPhoneX())
    return (
      <Provider store={Store}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView
          style={{ flex: 0, backgroundColor: colorPrimaryDarker }}
        />
        <SafeAreaView style={{ flex: 1, backgroundColor: colorPrimaryDarker }}>
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
      <StatusBar
        translucent={false}
        barStyle="default"
        backgroundColor={colorPrimaryDarker}
      />
      <NavigationContainer>
        <BreadProvider>
          <RootNav />
        </BreadProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
