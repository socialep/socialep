import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import { Button, IconButton } from "material-bread";

//Assets
import profileIcon from "../../assets/profileIcon.png";

//Util
import styles from "./styles";
import {
  colorCarousel,
  colorPrimary,
  colorUnselected,
} from "../../utils/colors";

//Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";

const index = (props) => {
  const {
    ui: { strings },
    user,
    navigation,
  } = props;

  //7
  const [page, setPage] = useState(0);

  const handleNextPage = () => {
    if (page == 5) return setPage(0);
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page == 0) return setPage(5);
    setPage(page - 1);
  };

  const handleTitle = (page) => {
    switch (page) {
      default:
        return strings.personalData;
      case 4:
        return strings.graduation;
      case 5:
        return strings.socialMedia;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button
          text={strings.backToProfile}
          type="outlined"
          textColor={colorUnselected}
          containerStyle={{ width: 200 }}
          onPress={() => navigation.pop()}
        />
        <Button
          text={strings.save}
          type="contained"
          color={colorPrimary}
          containerStyle={{ width: 200 }}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.headerView}>
          <IconButton
            name="chevron-left"
            size={34}
            color={colorCarousel}
            onPress={handlePreviousPage}
          />
          <Image
            source={profileIcon}
            style={styles.profileIcon}
            resizeMode="contain"
          />
          <IconButton
            name="chevron-right"
            size={34}
            color={colorCarousel}
            onPress={handleNextPage}
          />
        </View>
        <Text style={styles.lblTitle}>{handleTitle(page)}</Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui,
  user: state.user,
});

const mapDispatchToProps = {};

index.propTypes = {
  ui: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
