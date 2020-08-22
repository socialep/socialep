import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";

//Components
import CustomAppBar from "../../components/CustomAppBar";
import OpportunityListItem from "../../components/OpportunityListItem";
import Loading from "../../components/Loading";

//Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFavs, uploadFavOpps } from "../../redux/actions/uiActions";

//view-carousel | view-agenda | more-vert

const index = (props) => {
  const {
    ui: { strings, favorites, loading },
    user: { favoritesOpportunities },
    user,
    navigation,
    getFavs,
    uploadFavOpps,
  } = props;

  useEffect(() => {
    getFavs(favoritesOpportunities);
  }, []);

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
              handleFavPressed={() =>
                uploadFavOpps(opp.id, favoritesOpportunities, user.id)
              }
              btnPressed={() => navigation.push("Opportunity", { opp })}
              liked={favoritesOpportunities.includes(opp.id)}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui,
  user: state.user,
});

const mapDispatchToProps = {
  getFavs,
  uploadFavOpps,
};

index.propTypes = {
  ui: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  getFavs: PropTypes.func.isRequired,
  uploadFavOpps: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
