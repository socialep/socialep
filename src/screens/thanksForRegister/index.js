import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { TextField, Button } from "material-bread";

//Util
import { colorPrimary } from "../../utils/colors";
import styles from "./styles";

//Assets
import congrats from "../../assets/congrats.png";

//Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";

const index = (props) => {
  const {
    navigation,
    ui: { strings },
  } = props;

  return (
    <View style={styles.contaier}>
      <Image source={congrats} style={styles.image} />
      <Text style={styles.lblHeader}>{strings.thanks}</Text>
      <Text style={styles.lbl}>{strings.registeredLabel}</Text>
      <Button
        type="contained"
        color={colorPrimary}
        text={strings.ok}
        onPress={() => navigation.popToTop()}
        containerStyle={styles.btnOk}
        style={styles.btnSubscribeInside}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui,
});

const mapDispatchToProps = {};

index.propTypes = {
  ui: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
