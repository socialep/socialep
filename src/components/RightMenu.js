import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { SheetSide, List, ListItem, Checkbox } from "material-bread";

import {
  colorLightGrayBg,
  fontColor,
  colorSelected,
  colorFocused,
} from "../utils/colors";

//Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signOut } from "../redux/actions/userActions";

const styles = StyleSheet.create({
  lblHeader: {
    fontSize: 30,
    color: fontColor,
    textAlign: "center",
  },
  list: {
    backgroundColor: colorLightGrayBg,
    marginTop: 10,
  },
  listItemStyle: {
    height: 40,
  },
  lblItem: {
    color: colorFocused,
    fontSize: 16,
    fontWeight: "500",
  },
  lblSubHeader: {
    color: fontColor,
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
  },
});

const RightMenu = (props) => {
  const {
    open,
    onClose,
    ui: { strings },
    user,
  } = props;

  const [filter, setFilter] = useState(user.filter);

  const [aux, setAux] = useState(filter);

  const handleInterests = (key, value) => {
    setFilter({
      ...filter,
      interests: {
        ...filter.interests,
        [key]: value,
      },
    });
  };

  const handleModalities = (key, value) => {
    setFilter({
      ...filter,
      modalities: {
        ...filter.modalities,
        [key]: value,
      },
    });
  };

  const handleClose = () => {
    onClose(filter === aux ? false : filter);
    setAux(filter);
  };

  return (
    <SheetSide
      visible={open}
      onBackdropPress={handleClose}
      onSwipeRight={handleClose}
      widthPercentage={0.63}
    >
      <Text style={styles.lblHeader}>{strings.filterBy}</Text>
      <View style={styles.list}>
        <Text style={styles.lblSubHeader}>{strings.occupationArea}</Text>
        <List style={styles.list}>
          <ListItem
            text={strings.environment}
            onPress={() => {}}
            icon={
              <Checkbox
                size={24}
                checkboxColor={colorSelected}
                checked={filter.interests.environment}
                onPress={() =>
                  handleInterests("environment", !filter.interests.environment)
                }
              />
            }
            style={styles.listItemStyle}
            textStyle={styles.lblItem}
          />
          <ListItem
            text={strings.education}
            onPress={() => {}}
            icon={
              <Checkbox
                size={24}
                checkboxColor={colorSelected}
                checked={filter.interests.education}
                onPress={() =>
                  handleInterests("education", !filter.interests.education)
                }
              />
            }
            style={styles.listItemStyle}
            textStyle={styles.lblItem}
          />
          <ListItem
            text={strings.sports}
            onPress={() => {}}
            icon={
              <Checkbox
                size={24}
                checkboxColor={colorSelected}
                checked={filter.interests.sports}
                onPress={() =>
                  handleInterests("sports", !filter.interests.sports)
                }
              />
            }
            style={styles.listItemStyle}
            textStyle={styles.lblItem}
          />
          <ListItem
            text={strings.humanRights}
            onPress={() => {}}
            icon={
              <Checkbox
                size={24}
                checkboxColor={colorSelected}
                checked={filter.interests.human_rights}
                onPress={() =>
                  handleInterests(
                    "human_rights",
                    !filter.interests.human_rights
                  )
                }
              />
            }
            style={styles.listItemStyle}
            textStyle={styles.lblItem}
          />
          <ListItem
            text={strings.animals}
            onPress={() => {}}
            icon={
              <Checkbox
                size={24}
                checkboxColor={colorSelected}
                checked={filter.interests.animals}
                onPress={() =>
                  handleInterests("animals", !filter.interests.animals)
                }
              />
            }
            style={styles.listItemStyle}
            textStyle={styles.lblItem}
          />
          <ListItem
            text={strings.health}
            onPress={() => {}}
            icon={
              <Checkbox
                size={24}
                checkboxColor={colorSelected}
                checked={filter.interests.health}
                onPress={() =>
                  handleInterests("health", !filter.interests.health)
                }
              />
            }
            style={styles.listItemStyle}
            textStyle={styles.lblItem}
          />
          <ListItem
            text={strings.arts}
            onPress={() => {}}
            icon={
              <Checkbox
                size={24}
                checkboxColor={colorSelected}
                checked={filter.interests.arts}
                onPress={() => handleInterests("arts", !filter.interests.arts)}
              />
            }
            style={styles.listItemStyle}
            textStyle={styles.lblItem}
          />
          <ListItem
            text={strings.others}
            onPress={() => {}}
            icon={
              <Checkbox
                size={24}
                checkboxColor={colorSelected}
                checked={filter.interests.others}
                onPress={() =>
                  handleInterests("others", !filter.interests.others)
                }
              />
            }
            style={styles.listItemStyle}
            textStyle={styles.lblItem}
          />
        </List>
      </View>

      <View style={styles.list}>
        <Text style={styles.lblSubHeader}>{strings.modality}</Text>
        <List style={styles.list}>
          <ListItem
            text={strings.presential}
            onPress={() => {}}
            icon={
              <Checkbox
                size={24}
                checkboxColor={colorSelected}
                checked={filter.modalities.presential}
                onPress={() =>
                  handleModalities("presential", !filter.modalities.presential)
                }
              />
            }
            style={styles.listItemStyle}
            textStyle={styles.lblItem}
          />
          <ListItem
            text={strings.remote}
            onPress={() => {}}
            icon={
              <Checkbox
                size={24}
                checkboxColor={colorSelected}
                checked={filter.modalities.remote}
                onPress={() =>
                  handleModalities("remote", !filter.modalities.remote)
                }
              />
            }
            style={styles.listItemStyle}
            textStyle={styles.lblItem}
          />
        </List>
      </View>
    </SheetSide>
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui,
  user: state.user,
});

const mapDispatchToProps = {
  signOut,
};

RightMenu.propTypes = {
  ui: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RightMenu);
