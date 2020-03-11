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

const carusel2 = ({ ui: { strings }, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={superHero} />
      </View>
      <View style={styles.contentView}>
        <Text style={styles.lblTittle}>{strings.beAHero}</Text>
        <Text style={styles.text}>{strings.findInst}</Text>
        <Button
          style={styles.btnNext}
          text={strings.next}
          type="contained"
          color={colorPrimary}
          onPress={() => navigation.push('carousel3')}
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

export default connect(mapStateToProps, mapDispatchToProps)(carusel2);
