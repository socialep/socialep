import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { BreadProvider } from "material-bread";
import AppLoading from "expo-app-loading";
import * as firebase from "firebase";
import * as Font from "expo-font";

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

const customFonts = {
  "Segoe-UI": require("./fonts/SegoeUI.ttf"),
};

const App = () => {
  const [appLoaded, setAppLoaded] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        const userData = {
          uid: user.uid,
          name: user.displayName,
          email: user.providerData[0].email,
          photo: user.photoURL,
        };
        Store.dispatch(getUserData(userData));
      }
      Store.dispatch(setStrings(strings("pt-br")));

      setAppLoaded(true);
    });
  }, []);

  if (!appLoaded || !fontsLoaded) return <AppLoading />;

  if (isIPhoneX())
    return (
      <Provider store={Store}>
        <StatusBar barStyle='light-content' />
        <SafeAreaView
          style={{
            flex: 0,
            backgroundColor: colorPrimaryDarker,
          }}
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
        barStyle='default'
        backgroundColor={colorPrimaryDarker}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <BreadProvider>
            <RootNav />
          </BreadProvider>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
