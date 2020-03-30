import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Button } from "material-bread";

//REDUX
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Assets
import congrats from "../../assets/congrats.png";
import animal from "../../assets/animal.svg";
import hand from "../../assets/hand.svg";
import ball from "../../assets/ball.svg";
import leaf from "../../assets/leaf.svg";
import pills from "../../assets/pills.svg";
import gradHat from "../../assets/gradHat.svg";

//Util
import styles from "./styles";
import { colorPrimary } from "../../utils/colors";

//Components
import InterestCard from "../../components/InterestCard";

const index = props => {
  const [interests, setInterests] = useState({
    animals: false,
    humanRights: false,
    sports: false,
    environment: false,
    health: false,
    education: false
  });

  const [error, setError] = useState(null);

  const {
    ui: { strings }
  } = props;

  const handleToggle = (label, value) => {
    setInterests({
      ...interests,
      [label]: value
    });
  };

  const handleContinue = () => {
    setError(null);
    if (
      !interests.animals &&
      !interests.humanRights &&
      !interests.sports &&
      !interests.environment &&
      !interests.health &&
      !interests.education
    )
      return setError(strings.mustChooseAtLeastOne);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.headerImg} source={congrats} />
      <Text style={styles.lblHeader}>Olá, ANA</Text>
      <Text style={styles.lblSub}>{strings.howYWHelp}</Text>
      <View style={styles.buttonsList}>
        <InterestCard
          onPress={selected => handleToggle("animals", selected)}
          icon={animal}
          label={strings.animals}
          selected={interests.animals}
        />
        <InterestCard
          onPress={selected => handleToggle("humanRights", selected)}
          icon={hand}
          label={strings.humanRights}
          selected={interests.humanRights}
        />
        <InterestCard
          onPress={selected => handleToggle("sports", selected)}
          icon={ball}
          label={strings.sports}
          selected={interests.sports}
        />
        <InterestCard
          onPress={selected => handleToggle("environment", selected)}
          icon={leaf}
          label={strings.environment}
          selected={interests.environment}
        />
        <InterestCard
          onPress={selected => handleToggle("health", selected)}
          icon={pills}
          label={strings.health}
          selected={interests.health}
        />
        <InterestCard
          onPress={selected => handleToggle("education", selected)}
          icon={gradHat}
          label={strings.education}
          selected={interests.education}
        />
      </View>
      {error && <Text style={styles.lblError}>{error}</Text>}
      <Button
        onPress={handleContinue}
        text={strings.continue}
        type="contained"
        color={colorPrimary}
        containerStyle={{ alignSelf: "center" }}
      />
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
