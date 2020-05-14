import React from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";

//Components
import CustomAppBar from "../../components/CustomAppBar";
import PostCard from "../../components/PostCard";

//Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";

const index = (props) => {
  const {
    ui: { strings, posts },
    navigation,
  } = props;
  return (
    <View style={styles.container}>
      <CustomAppBar title={strings.feed} />
      <ScrollView>
        {posts.map((post, index) => (
          <PostCard
            key={index}
            post={post}
            onPress={() => navigation.push("Organization")}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui,
});

const mapDispatchToProps = {};

index.propTypes = {
  ui: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
