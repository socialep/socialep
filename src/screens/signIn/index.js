import React from "react";
import { View } from "react-native";

//Material Bread
import { Button } from "material-bread";

//UTIL
import styles from "./styles";

//REDUX
import PropTypes from "prop-types";
import { connect } from "react-redux";

const index = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
    </View>
  );
};

const mapStateToProps = state => ({
  ui: state.ui
});

const mapDispatchToProps = {};

index.propTypes = {
  ui: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
