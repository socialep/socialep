import React from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";

//Components
import CustomAppBar from "../../components/CustomAppBar";
import OpportunityListItem from "../../components/OpportunityListItem";
import Loading from "../../components/Loading";

//Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";

//view-carousel | view-agenda | more-vert

const index = (props) => {
  const {
    ui: { strings, favorites, loading },
    navigation,
  } = props;

  return (
    <View style={styles.container}>
      <CustomAppBar title={strings.favorites} />
      {loading ? (
        <Loading />
      ) : (
        <ScrollView>
          {favorites.map((opp, index) => (
            <OpportunityListItem
              key={index}
              opportunity={opp}
              handleFavPressed={() => console.log("favorited")}
              btnPressed={() => navigation.push("Opportunity", { opp })}
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

const mapDispatchToProps = {};

index.propTypes = {
  ui: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
