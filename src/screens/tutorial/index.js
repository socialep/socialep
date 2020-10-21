import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import { Button } from "material-bread";

//Util
import styles from "./styles";
import { colorWhite, colorPrimary } from "../../utils/colors";

//Assets
import passo1 from "../../assets/tutorial/passo1.png";
import passo2 from "../../assets/tutorial/passo2.png";
import passo3 from "../../assets/tutorial/passo3.png";
import passo4 from "../../assets/tutorial/passo4.png";

//Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setFirstTime } from "../../redux/actions/uiActions";

const index = ({ ui: { strings }, setFirstTime, navigation }) => {
  const [count, setCount] = useState(0);

  const handleImage = () => {
    switch (count) {
      default:
        return passo1;
      case 0:
        return passo1;
      case 1:
        return passo2;
      case 2:
        return passo3;
      case 3:
        return passo4;
    }
  };
  const handleDes = () => {
    switch (count) {
      default:
        return strings.tutorial1;
      case 0:
        return strings.tutorial1;
      case 1:
        return strings.tutorial2;
      case 2:
        return strings.tutorial3;
      case 3:
        return strings.tutorial4;
    }
  };

  const handleTitle = () => {
    switch (count) {
      default:
        return strings.beAHero;
      case 0:
        return strings.beAHero;
      case 1:
        return strings.how;
      case 2:
        return strings.itsThis;
      case 3:
        return "";
    }
  };

  const handlePress = () => {
    if (count == 3) return navigation.pop();
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={handleImage()} resizeMode="contain" />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.lblTitle}>{handleTitle()}</Text>
        <Text style={styles.lblDes}>{handleDes()}</Text>
      </View>
      <Button
        type="contained"
        color={colorPrimary}
        textColor={colorWhite}
        text={count == 3 ? strings.begin : strings.next}
        containerStyle={styles.btn}
        onPress={handlePress}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui,
});

const mapDispatchToProps = {
  setFirstTime,
};

index.propTypes = {
  ui: PropTypes.object.isRequired,
  setFirstTime: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
