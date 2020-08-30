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
import { registerForOpp } from "../../redux/actions/userActions";

const index = (props) => {
  const {
    ui: { strings, loading },
    user,
    navigation,
    route: {
      params: { oppId, oppName },
    },
    registerForOpp,
  } = props;

  const [form, setForm] = useState({
    disponibility: "",
    experience: "",
    presentation: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    let mErrors = {};
    if (form.disponibility.length == 0 || form.disponibility.trim === "")
      mErrors.disponibility = strings.mustNotBeEmpty;
    if (form.experience.length == 0 || form.experience.trim === "")
      mErrors.experience = strings.mustNotBeEmpty;
    if (form.presentation.length == 0 || form.presentation.trim === "")
      mErrors.presentation = strings.mustNotBeEmpty;

    if (!Object.keys(mErrors).length == 0) return setErrors(mErrors);

    const formData = {
      oppId: oppId,
      registrationData: {
        availability: form.disponibility,
        experience: form.experience,
        presentation: form.presentation,
        userEmail: user.email,
        userName: user.name,
        userPhoto: user.photo,
        userUid: user.id,
      },
    };

    registerForOpp(formData, navigation);
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
            helperText={errors.disponibility}
            helperTextStyle={{ color: "red" }}
            textAlignVertical="top"
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
            helperText={errors.experience}
            helperTextStyle={{ color: "red" }}
            textAlignVertical="top"
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
            helperText={errors.presentation}
            helperTextStyle={{ color: "red" }}
            textAlignVertical="top"
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
            disabled={loading}
          />
          <Button
            type="contained"
            color={colorPrimary}
            text={strings.register}
            onPress={() => handleSubmit()}
            containerStyle={styles.btnSubscribe}
            style={styles.btnSubscribeInside}
            disabled={loading}
            loading={loading}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui,
  user: state.user,
});

const mapDispatchToProps = { registerForOpp };

index.propTypes = {
  ui: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  registerForOpp: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
