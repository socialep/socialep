import React from "react";
import { StyleSheet, Text, View } from "react-native";

//MATERIAL BREAD
import { Appbar, IconButton } from "material-bread";

//UTILS
import {
  colorPrimary,
  colorLightGrayBg,
  colorUnselected,
} from "../utils/colors";

const styles = StyleSheet.create({
  actionsContainer: {
    flexDirection: "row",
  },
  lblTitle: {
    fontSize: 20,
    color: colorUnselected,
    fontWeight: "700",
  },
});

const CustomAppBar = (props) => {
  const { mode, actions, title } = props;

  return (
    <Appbar color={colorLightGrayBg} elevation={10}>
      {mode && (
        <Icon
          name={mode}
          color={colorUnselected}
          size={32}
          onPress={props.onNavigation}
        />
      )}
      <Text style={styles.lblTitle}>{title}</Text>
      <View style={styles.actionsContainer}>
        {actions.map((action, index) => (
          <IconButton
            key={index}
            name={action}
            color={colorUnselected}
            size={32}
            onPress={index == 0 ? props.onSecondaryAction : props.onThirdAction}
          />
        ))}
      </View>
    </Appbar>
  );
};

export default CustomAppBar;
