import React, { useState } from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { Avatar, Divider } from "material-bread";

//Components
import CustomAppBar from "../../components/CustomAppBar";
import ProfileMenu from "../../components/ProfileMenu";
import InterestsSection from "../../components/InterestsSection";

//Util
import styles from "./styles";
import { colorPrimary } from "../../utils/colors";

//Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";

const index = (props) => {
  const {
    ui: { strings },
    user,
    navigation,
  } = props;

  const [menu, setMenu] = useState(false);

  return (
    <View style={styles.container}>
      <CustomAppBar
        actions={["menu"]}
        onSecondaryAction={() => setMenu(true)}
        title={strings.myAccount}
      />
      <ProfileMenu
        navigation={navigation}
        open={menu}
        onClose={() => setMenu(false)}
      />
      <ScrollView style={styles.container}>
        <>
          <View style={styles.header} />
          <Avatar
            type="image"
            image={<Image source={{ uri: user.photo }} />}
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
          <Text style={styles.lblName}>{user.name}</Text>
          <Text style={styles.lblEmail}>{user.email}</Text>
          <Divider />
          <Text style={styles.lblEmail}>
            {user.gender}, {user.nationality}
          </Text>
        </View>
        {user.presentation !== "" && (
          <View style={{ padding: 20 }}>
            {/* <Text style={styles.lblSection}>{strings.presentation}</Text> */}
            <Text style={styles.lblPresentation}>{user.presentation}</Text>
          </View>
        )}

        <InterestsSection strings={strings} interests={user.interests} />

        {user.languages.length > 0 && (
          <View style={styles.sectionContainer}>
            <Text style={styles.lblSection}>{strings.languages}</Text>
            <Text style={styles.lbl}>
              {user.languages.toString().replace(",", ", ")}
            </Text>
          </View>
        )}
        {user.institution !== "" && (
          <View style={styles.sectionContainer}>
            <Text style={styles.lblSection}>{strings.graduation}</Text>
            <Text style={{ ...styles.lbl, fontWeight: "700", marginBottom: 3 }}>
              {user.institution}
            </Text>
            <Text style={styles.lbl}>{user.course}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui,
  user: state.user,
});

const mapDispatchToProps = {};

index.propTypes = {
  ui: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
