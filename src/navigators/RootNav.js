import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AsyncStorage } from "react-native";

//components
import Loading from "../components/Loading";

//navigators
import MainNav from "./MainNav";
import SignInNav from "./SignInNav";
import CarouselNav from "./CarouselNav";

//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUserFromCache } from "../redux/actions/userActions";

const RootStack = createStackNavigator();

const RootNav = props => {
  const [firstTime, setFirstTime] = useState(true);
  const [loading, setLoading] = useState(false);
  const [logged, setLogged] = useState(false);

  return (
    <>
      {loading ? (
        <Loading />
      ) : firstTime ? (
        <RootStack.Navigator headerMode="none">
          <RootStack.Screen name="CarouselNav" component={CarouselNav} />
        </RootStack.Navigator>
      ) : logged ? (
        <RootStack.Navigator headerMode="none">
          <RootStack.Screen name="MainNav" component={MainNav} />
        </RootStack.Navigator>
      ) : (
        <RootStack.Navigator headerMode="none">
          <RootStack.Screen name="SignInNav" component={SignInNav} />
        </RootStack.Navigator>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  getUserFromCache
};

RootNav.propTypes = {
  user: PropTypes.object.isRequired,
  getUserFromCache: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(RootNav);
