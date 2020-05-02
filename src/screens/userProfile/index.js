import React from "react";
import { View, Image, Text } from "react-native";
import { Avatar, Divider } from "material-bread";
import styles from "./styles";

//Components
import CustomAppBar from "../../components/CustomAppBar";

//Util
import { colorPrimary } from "../../utils/colors";
import profileHeader from "../../assets/profileHeader.png";

//Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";

//view-carousel | view-agenda | more-vert

const index = (props) => {
  const {
    ui: { strings },
  } = props;
  return (
    <View style={styles.container}>
      <CustomAppBar
        actions={["edit"]}
        onSecondaryAction={() => console.log("onSecondaryAction")}
        title={strings.myAccount}
      />
      <View style={styles.container}>
        <>
          <Image style={styles.header} source={profileHeader} />
          <Avatar
            type="image"
            image={
              <Image
                source={{
                  uri:
                    "https://avatars1.githubusercontent.com/u/12564956?s=460&v=4",
                }}
              />
            }
            size={107}
            style={styles.logo}
          />
          <Avatar
            type="text"
            text=""
            size={130}
            style={styles.logoBackGround}
            color={colorPrimary}
          />
        </>
        <View style={styles.nameEmail}>
          <Text style={styles.lblName}>Marcos Marques</Text>
          <Text style={styles.lblEmail}>marcosmarquesdev@gmail.com</Text>
          <Divider />
        </View>
      </View>
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