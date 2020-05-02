import React from "react";

//MATERIAL BREAD
import { Appbar } from "material-bread";

//UTILS
import { colorPrimary } from "../utils/colors";

const CustomAppBar = (props) => {
  const { mode, actions, title } = props;

  const actionsItens = actions
    ? actions.map((action, index) => ({
        name: action,
        onPress: index == 0 ? props.onSecondaryAction : props.onThirdAction,
      }))
    : [];

  return (
    <Appbar
      barType="dense"
      color={colorPrimary}
      title={title ? title : ""}
      style={styles.appBar}
      navigation={mode ? mode : null}
      onNavigation={props.onNavigation}
      actionItems={actionsItens}
    />
  );
};

export default CustomAppBar;
