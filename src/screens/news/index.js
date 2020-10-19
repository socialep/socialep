import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, ScrollView } from "react-native";
import styles from "./styles";

//Components
import CustomAppBar from "../../components/CustomAppBar";
import PostCard from "../../components/PostCard";
import Loading from "../../components/Loading";

//Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../redux/actions/uiActions";

const index = (props) => {
  const {
    ui: { strings, posts, loading },
    navigation,
    getPosts,
  } = props;

  useFocusEffect(
    useCallback(() => {
      getPosts();
    }, [])
  );

  return (
    <View style={styles.container}>
      <CustomAppBar title={strings.feed} />
      {loading ? (
        <Loading />
      ) : (
        <ScrollView>
          {posts.map((post, index) => (
            <PostCard
              key={index}
              post={post}
              onPress={(orgId) =>
                navigation.push("Organization", { id: orgId })
              }
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui,
});

const mapDispatchToProps = { getPosts };

index.propTypes = {
  ui: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
