import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AsyncStorage } from "react-native";

//components
import Loading from "../components/Loading";

//navigators
import MainNav from "./MainNav";
import SignInNav from "./SignInNav";
import CarouselNav from "./CarouselNav";
import selectInterests from "../screens/selectInterests";

//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {} from "../redux/actions/userActions";

//firebase
import firebase from "firebase";

const RootStack = createStackNavigator();

const RootNav = (props) => {
  const [firstTime, setFirstTime] = useState(false);
  const [loading, setLoading] = useState(false);
  const [logged, setLogged] = useState(false);
  const [interests, setInterests] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) setLogged(true);
      else setLogged(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : firstTime ? (
        <RootStack.Navigator headerMode="none">
          <RootStack.Screen name="CarouselNav" component={CarouselNav} />
        </RootStack.Navigator>
      ) : logged && interests ? (
        <RootStack.Navigator headerMode="none">
          <RootStack.Screen name="MainNav" component={MainNav} />
        </RootStack.Navigator>
      ) : logged && !interests ? (
        <RootStack.Navigator headerMode="none">
          <RootStack.Screen
            name="selectInterests"
            component={selectInterests}
          />
        </RootStack.Navigator>
      ) : (
        <RootStack.Navigator headerMode="none">
          <RootStack.Screen name="SignInNav" component={SignInNav} />
        </RootStack.Navigator>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {};

RootNav.propTypes = {
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootNav);
