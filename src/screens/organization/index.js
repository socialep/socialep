import React, { useEffect } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { Icon } from "material-bread";
import { SliderBox } from "react-native-image-slider-box";
import SvgUri from "react-native-svg-uri-reborn";

//Util
import styles from "./styles";
import {
  colorFocused,
  colorCarousel,
  colorUnselected,
  colorPrimary,
  colorPrimaryDarker,
} from "../../utils/colors";

//Components
import CustomAppBar from "../../components/CustomAppBar";
import Loading from "../../components/Loading";
import OpportunityListItem from "../../components/OpportunityListItem";
import InterestsSection from "../../components/InterestsSection";

//Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getOrg, uploadFavOpps } from "../../redux/actions/uiActions";

const index = (props) => {
  const {
    navigation,
    getOrg,
    user: { favoritesOpportunities },
    user,
    ui: {
      strings,
      loading,
      organization: {
        name,
        logo,
        rating,
        description,
        interests,
        photos,
        address,
        phone,
      },
      opportunities,
    },
    route: {
      params: { id },
    },
    uploadFavOpps,
  } = props;

  useEffect(() => {
    getOrg(id);
  }, []);

  return (
    <View style={styles.container}>
      <CustomAppBar mode="arrow-back" onNavigation={() => navigation.pop()} />
      {loading ? (
        <Loading />
      ) : (
        <ScrollView>
          <View>
            <Image
              source={{ uri: logo }}
              style={styles.logo}
              resizeMode="cover"
            />
            <Text style={styles.lblHeader}>{name}</Text>
            <View style={styles.ratingView}>
              <Icon
                name="star"
                size={28}
                color={rating >= 1 ? colorFocused : colorCarousel}
              />
              <Icon
                name="star"
                size={28}
                color={rating >= 2 ? colorFocused : colorCarousel}
              />
              <Icon
                name="star"
                size={28}
                color={rating >= 3 ? colorFocused : colorCarousel}
              />
              <Icon
                name="star"
                size={28}
                color={rating >= 4 ? colorFocused : colorCarousel}
              />
              <Icon
                name="star"
                size={28}
                color={rating == 5 ? colorFocused : colorCarousel}
              />
            </View>
            <Text style={styles.lblDes}>{description}</Text>
            <InterestsSection strings={strings} interests={interests} />
            <SliderBox
              images={photos}
              disableOnPress
              sliderBoxHeight={250}
              dotColor={colorPrimary}
              inactiveDotColor={colorPrimaryDarker}
            />
            <View style={styles.addressContainer}>
              <Icon name="location-on" size={40} color={colorUnselected} />
              <Text style={styles.lblAddress}>{address}</Text>
            </View>
            <View style={styles.addressContainer}>
              <Icon name="phone" size={40} color={colorUnselected} />
              <Text style={styles.lblAddress}>{phone}</Text>
            </View>
            <View style={{ marginTop: 5 }} />
            {opportunities.map((opp, index) => (
              <OpportunityListItem
                key={index}
                opportunity={opp}
                handleFavPressed={() =>
                  uploadFavOpps(opp.id, favoritesOpportunities, user.id)
                }
                btnPressed={() => navigation.push("Opportunity", { opp })}
              />
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui,
  user: PropTypes.object.isRequired,
});

const mapDispatchToProps = {
  getOrg,
  uploadFavOpps,
};

index.propTypes = {
  ui: PropTypes.object.isRequired,
  getOrg: PropTypes.func.isRequired,
  uploadFavOpps: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
