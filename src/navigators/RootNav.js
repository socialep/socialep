import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AsyncStorage } from "react-native";

//components
import Loading from "../components/Loading";

//navigators
import MainNav from "./MainNav";
import SignInNav from "./SignInNav";
import selectInterests from "../screens/selectInterests";

//screens
import tutorial from "../screens/tutorial";

//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {} from "../redux/actions/userActions";

const RootStack = createStackNavigator();

const RootNav = ({ ui: { loadingUser, logged, interestsFilled } }) => {
  const [firstTime, setFirstTime] = useState(false);

  return (
    <>
      {loadingUser ? (
        <Loading />
      ) : firstTime ? (
        <RootStack.Navigator headerMode="none">
          <RootStack.Screen name="Tutorial" component={tutorial} />
        </RootStack.Navigator>
      ) : logged && interestsFilled ? (
        <RootStack.Navigator headerMode="none">
          <RootStack.Screen name="MainNav" component={MainNav} />
        </RootStack.Navigator>
      ) : logged && !interestsFilled ? (
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
  ui: state.ui,
});

const mapDispatchToProps = {};

RootNav.propTypes = {
  user: PropTypes.object.isRequired,
  ui: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootNav);
