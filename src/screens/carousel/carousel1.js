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

const carousel1 = ({ ui: { strings }, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={superHero} />
      </View>
      <View style={styles.contentView}>
        <Text style={styles.lblTittle}>{strings.welcome}</Text>
        <Text style={styles.text}>{strings.carousel1}</Text>
        <Button
          style={styles.btnNext}
          text={strings.next}
          type="contained"
          color={colorPrimary}
          onPress={() => navigation.push('carousel2')}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  ui: state.ui
});

const mapDispatchToProps = {};

carousel1.propTypes = {
  ui: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(carousel1);
