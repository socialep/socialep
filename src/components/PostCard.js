import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Avatar, IconButton, Divider } from "material-bread";

import {
  colorSignInHeader,
  colorPrimary,
  colorFocused,
  colorInterestCardBg,
} from "../utils/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorInterestCardBg,
    marginBottom: 10,
  },
  headerView: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  lblHeader: {
    marginLeft: 10,
    color: colorSignInHeader,
    fontSize: 14,
    fontWeight: "700",
  },
  image: {
    width: "100%",
    height: 260,
  },
  likesView: {
    flexDirection: "row",
    paddingTop: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  divider: {
    marginHorizontal: 20,
  },
  lblBody: {
    alignSelf: "flex-start",
    marginHorizontal: 20,
    marginVertical: 10,
    color: colorFocused,
    fontSize: 15,
  },
});

export default PostCard = (props) => {
  const {
    post: { body, createdAt, id, image, likes, orgId, orgLogo, orgName },
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Avatar
          type="image"
          size={50}
          image={<Image source={{ uri: orgLogo }} />}
          onPress={() => props.onPress()}
          ripple
        />
        <Text style={styles.lblHeader} onPress={() => props.onPress()}>
          {orgName}
        </Text>
      </View>
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="cover"
        on
      />
      <View style={styles.likesView}>
        <IconButton name="thumb-up" size={36} color={colorPrimary} />
        <Text style={styles.lblHeader}>{likes.length}</Text>
      </View>
      <View style={styles.divider}>
        <Divider />
      </View>
      <Text style={styles.lblBody}>{body}</Text>
    </View>
  );
};
