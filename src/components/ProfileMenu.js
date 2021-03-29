import React, { useState } from "react";
import { Text, StyleSheet, View, Linking } from "react-native";
import { SheetSide, List, ListItem, Icon, Divider } from "material-bread";

import {
  colorLightGrayBg,
  fontColor,
  colorFocused,
  colorPrimary,
} from "../utils/colors";

//Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signOut } from "../redux/actions/userActions";

const styles = StyleSheet.create({
  listItemStyle: {
    height: 40,
  },
  lblItem: {
    color: colorFocused,
    fontSize: 16,
    fontWeight: "500",
  },
});

const ProfileMenu = (props) => {
  const {
    open,
    onClose,
    navigation,
    ui: { strings },
  } = props;

  return (
    <SheetSide
      visible={open}
      onBackdropPress={onClose}
      onSwipeRight={onClose}
      widthPercentage={0.53}
    >
      <List style={styles.list}>
        <ListItem
          text={strings.howItWorks}
          onPress={() => {
            onClose();
            navigation.push("Tutorial");
          }}
          icon={<Icon name='help' color={colorPrimary} size={24} />}
          style={styles.listItemStyle}
          textStyle={styles.lblItem}
        />
        <ListItem
          text={strings.terms}
          onPress={() => Linking.openURL("https://socialep.github.io")}
          icon={<Icon name='account-balance' color={colorPrimary} size={24} />}
          style={styles.listItemStyle}
          textStyle={styles.lblItem}
        />
        <ListItem
          text={strings.editProfile}
          onPress={() => {
            navigation.push("EditProfile");
            onClose();
          }}
          icon={<Icon name='edit' color={colorPrimary} size={24} />}
          style={styles.listItemStyle}
          textStyle={styles.lblItem}
        />
        <Divider />
        <ListItem
          text={strings.signOut}
          onPress={() => props.signOut()}
          icon={<Icon name='exit-to-app' color={colorPrimary} size={24} />}
          style={styles.listItemStyle}
          textStyle={styles.lblItem}
        />
      </List>
    </SheetSide>
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui,
});

const mapDispatchToProps = {
  signOut,
};

ProfileMenu.propTypes = {
  ui: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenu);
