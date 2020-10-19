import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, ScrollView } from "react-native";
import styles from "./styles";

//Components
import CustomAppBar from "../../components/CustomAppBar";
import Loading from "../../components/Loading";
import OpportunityCard from "../../components/OpportunityCard";
import OpportunityListItem from "../../components/OpportunityListItem";
import RightMenu from "../../components/RightMenu";

//Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getOpps, uploadFavOpps } from "../../redux/actions/uiActions";
import { saveFilter } from "../../redux/actions/userActions";

//Util
import { registerForPush } from "../../utils/pushNotfy";

//view-carousel | view-agenda | more-vert

const index = (props) => {
  const {
    ui: { strings, loading, opportunities },
    user: { interests, favoritesOpportunities },
    user,
    navigation,
    getOpps,
    uploadFavOpps,
    saveFilter,
  } = props;

  const [mode, setMode] = useState("carrousel");
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    registerForPush(user.id);
  }, []);

  useFocusEffect(
    useCallback(() => {
      getOpps(interests);
    }, [])
  );

  return (
    <View style={styles.container}>
      <CustomAppBar
        actions={[
          mode === "carrousel" ? "view-carousel" : "view-agenda",
          "filter-list",
        ]}
        onSecondaryAction={() =>
          setMode(mode === "carrousel" ? "agenda" : "carrousel")
        }
        onThirdAction={() => setMenu(true)}
        title={strings.home}
      />
      <RightMenu
        open={menu}
        onClose={(changes) => {
          if (changes != false) {
            getOpps(changes.interests);
            saveFilter(changes);
          }
          setMenu(false);
        }}
      />
      {loading ? (
        <Loading />
      ) : (
        <ScrollView>
          {mode === "carrousel"
            ? opportunities.map((opp, index) => (
                <OpportunityCard
                  key={index}
                  opportunity={opp}
                  handleFavPressed={() =>
                    uploadFavOpps(opp.id, favoritesOpportunities, user.id)
                  }
                  btnPressed={() => navigation.push("Opportunity", { opp })}
                  liked={favoritesOpportunities.includes(opp.id)}
                />
              ))
            : opportunities.map((opp, index) => (
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
  getOpps,
  uploadFavOpps,
  saveFilter,
};

index.propTypes = {
  ui: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  getOpps: PropTypes.func.isRequired,
  uploadFavOpps: PropTypes.func.isRequired,
  saveFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
