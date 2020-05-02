import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Button, IconButton, Icon, Divider } from "material-bread";
import {
  colorPrimary,
  colorStar,
  colorFavorite,
  fontColor,
  colorSignInHeader,
} from "../utils/colors";

//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 189,
    marginVertical: 10,
  },
  lblName: {
    fontSize: 30,
    fontWeight: "100",
    color: colorSignInHeader,
    textAlign: "center",
  },
  lblDes: {
    fontSize: 27,
    color: fontColor,
    textAlign: "center",
    marginVertical: 5,
  },
  lblRating: {
    fontSize: 18,
    fontWeight: "200",
    marginLeft: 8,
  },
  btnSubscribe: {
    marginVertical: 10,
  },
});

const OpportunityCard = (props) => {
  const {
    ui: { strings },
    opportunity: { rating, photo, name, description },
  } = props;

  const [liked, setLiked] = useState(props.opportunity.liked);

  const handleFavPressed = () => {
    props.handleFavPressed(!liked);
    setLiked(!liked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.ratingContainer}>
          <Icon size={33} name="star" color={colorStar} />
          <Text style={styles.lblRating}>{rating}</Text>
        </View>
        <IconButton
          name={liked ? "favorite" : "favorite-border"}
          size={33}
          color={colorFavorite}
          onPress={handleFavPressed}
        />
      </View>
      <Image style={styles.image} source={{ uri: photo }} />
      <Text style={styles.lblName}>{name}</Text>
      <Text style={styles.lblDes}>{description}</Text>
      <Button
        type="contained"
        color={colorPrimary}
        text={strings.wantToSubscribe}
        onPress={() => props.btnPressed()}
        containerStyle={styles.btnSubscribe}
      />
      <Divider />
    </View>
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui,
});

const mapDispatchToProps = {};

OpportunityCard.propTypes = {
  ui: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(OpportunityCard);
