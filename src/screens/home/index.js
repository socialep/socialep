import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";

//Components
import CustomAppBar from "../../components/CustomAppBar";
import Loading from "../../components/Loading";
import OpportunityCard from "../../components/OpportunityCard";
import OpportunityListItem from "../../components/OpportunityListItem";

//Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";

//view-carousel | view-agenda | more-vert

const index = (props) => {
  const {
    ui: { strings, loading, opportunities },
    navigation,
  } = props;

  const [mode, setMode] = useState("carrousel");

  return (
    <View style={styles.container}>
      <CustomAppBar
        actions={[
          mode === "carrousel" ? "view-carousel" : "view-agenda",
          "more-vert",
        ]}
        onSecondaryAction={() =>
          setMode(mode === "carrousel" ? "agenda" : "carrousel")
        }
        onThirdAction={() => console.log("onThirdAction")}
        title={strings.home}
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
                  handleFavPressed={() => console.log("favorited")}
                  btnPressed={() => navigation.push("Opportunity", { opp })}
                />
              ))
            : opportunities.map((opp, index) => (
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
