import React from "react";
import { View, Image, Text } from "react-native";

//Material Bread
import { Button, Avatar } from "material-bread";

//UTIL
import styles from "./styles";
import logo from "../../assets/logo.png";
import signInHeader from "../../assets/signInHeader.png";
import {
  colorSignInHeader,
  colorSignInGoogle,
  colorSignInFacebook,
} from "../../utils/colors";

//REDUX
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signInGoogle, signInFaceBook } from "../../redux/actions/userActions";

const index = (props) => {
  const {
    ui: { strings },
  } = props;

  return (
    <>
      <Image style={styles.header} source={signInHeader} />
      <View style={styles.container}>
        <Avatar
          type="image"
          image={<Image source={logo} />}
          size={107}
          style={styles.logo}
        />
        <Avatar
          type="text"
          text=""
          size={130}
          style={styles.logoBackGround}
          color={colorSignInHeader}
        />
        <Text style={styles.lblSignIn}>{strings.signIn}</Text>
        <Button
          containerStyle={styles.btnSignIn}
          type="contained"
          text={strings.signInFacebook}
          color={colorSignInFacebook}
          onPress={props.signInFaceBook}
        />
        <Button
          containerStyle={styles.btnSignIn}
          type="contained"
          text={strings.signInGoogle}
          color={colorSignInGoogle}
          onPress={props.signInGoogle}
        />
      </View>
      <Button
        type="text"
        containerStyle={styles.btnPrivacy}
        text={strings.useAndPrivacy}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui,
});

const mapDispatchToProps = {
  signInGoogle,
  signInFaceBook,
};

index.propTypes = {
  ui: PropTypes.object.isRequired,
  signInGoogle: PropTypes.func.isRequired,
  signInFaceBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
