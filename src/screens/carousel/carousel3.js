import React from "react";
import { Text, View } from "react-native";
import { Button } from "material-bread";

//UTIL
import styles from "./styles";
import superHero from "../../assets/superHero.png";
import { colorPrimary } from "../../utils/colors";

//REDUX
import PropTypes from "prop-types";
import { connect } from "react-redux";

const carousel3 = ({ ui: { strings } }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={superHero} />
      </View>
      <View style={styles.contentView}>
        <Text style={styles.text}>{strings.youReady}</Text>
        <Button
          style={styles.btnNext}
          text={strings.begin}
          type="contained"
          color={colorPrimary}
        />
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(carousel3);
