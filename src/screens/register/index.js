import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { TextField, Button } from "material-bread";

//Util
import styles from "./styles";
import { colorPrimary, colorSignInGoogle } from "../../utils/colors";

//Components
import CustomAppBar from "../../components/CustomAppBar";

//Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";

const index = (props) => {
  const {
    ui: { strings, loading },
    navigation,
    route: {
      params: { oppId, oppName },
    },
  } = props;

  const [form, setForm] = useState({
    disponibility: "",
    experience: "",
    presentation: "",
  });

  const handleChange = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    navigation.push("ThanksForRegister");
  };

  return (
    <View style={styles.container}>
      <CustomAppBar mode="arrow-back" onNavigation={() => navigation.pop()} />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.lblHeader}>{oppName}</Text>
        <View style={styles.askContainer}>
          <Text style={styles.lblAsk}>{strings.disponibility}</Text>
          <TextField
            multiline={true}
            labelStyle={styles.labelStyle}
            type={"outlined"}
            label={strings.disponibilityLabel}
            value={form.disponibility}
            onChangeText={(value) => handleChange("disponibility", value)}
          />
        </View>
        <View style={styles.askContainer}>
          <Text style={styles.lblAsk}>{strings.experience}</Text>
          <TextField
            multiline={true}
            labelStyle={styles.labelStyle}
            style={{ height: 150 }}
            type={"outlined"}
            label={strings.experienceLabel}
            value={form.experience}
            onChangeText={(value) => handleChange("experience", value)}
          />
        </View>
        <View style={styles.askContainer}>
          <Text style={styles.lblAsk}>{strings.presentationLetter}</Text>
          <TextField
            multiline={true}
            labelStyle={styles.labelStyle}
            style={{ height: 150 }}
            type={"outlined"}
            label={strings.presentationLabel}
            value={form.presentation}
            onChangeText={(value) => handleChange("presentation", value)}
          />
        </View>
        <View style={styles.horizontalContainer}>
          <Button
            type="outlined"
            textColor={colorSignInGoogle}
            text={strings.cancel}
            onPress={() => navigation.pop()}
            containerStyle={styles.btnSubscribe}
            style={styles.btnSubscribeInside}
          />
          <Button
            type="contained"
            color={colorPrimary}
            text={strings.register}
            onPress={() => handleSubmit()}
            containerStyle={styles.btnSubscribe}
            style={styles.btnSubscribeInside}
          />
        </View>
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
