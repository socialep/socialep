import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";

//Components
import CustomAppBar from "../../components/CustomAppBar";
import Loading from "../../components/Loading";
import OpportunityCard from "../../components/OpportunityCard";

//Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";

//view-carousel | view-agenda | more-vert

const index = (props) => {
  const {
    ui: { strings, loading },
  } = props;

  const [mode, setMode] = useState("carrousel");

  const opportunities = [
    {
      rating: 3.5,
      photo:
        "https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      name: "Oportunidade de Teste",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
      liked: true,
    },
    {
      rating: 3.5,
      photo:
        "https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      name: "Oportunidade de Teste",
      description:
        "Oportunidade de Teste Oportunidade de Teste Oportunidade de Teste",
      liked: true,
    },
  ];

  return (
    <View style={styles.container}>
      <CustomAppBar
        actions={["view-carousel", "more-vert"]}
        onSecondaryAction={() => console.log("onSecondaryAction")}
        onThirdAction={() => console.log("onThirdAction")}
        title={strings.home}
      />
      {loading ? (
        <Loading />
      ) : (
        <ScrollView>
          {opportunities.map((opp) => (
            <OpportunityCard
              opportunity={opp}
              handleFavPressed={() => console.log("favorited")}
              btnPressed={() => console.log("pressed")}
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
