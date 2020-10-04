import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { Button } from "material-bread";

//Util
import styles from "./styles";
import { colorPrimary, colorSignInGoogle } from "../../utils/colors";

//Components
import CustomAppBar from "../../components/CustomAppBar";
import TextInput from "../../components/TextInput";
import MultilineTextField from "../../components/MultilineTextField";

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

    registerForOpp(formData, navigation, user.interests);
  };

  return (
    <View style={styles.container}>
      <CustomAppBar mode="arrow-back" onNavigation={() => navigation.pop()} />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.lblHeader}>{oppName}</Text>
        <View style={styles.askContainer}>
          <Text style={styles.lblAsk}>{strings.disponibility}</Text>
          <MultilineTextField
            value={form.disponibility}
            onValueChange={(value) => handleChange("disponibility", value)}
            autoCapitalize="sentences"
            error={errors.disponibility ? errors.disponibility : null}
            placeholder={strings.typeSomething}
          />
        </View>
        <View style={styles.askContainer}>
          <Text style={styles.lblAsk}>{strings.experience}</Text>
          <TextInput
            value={form.experience}
            onValueChange={(value) => handleChange("experience", value)}
            //label={strings.experienceLabel}
            error={errors.experience ? errors.experience : null}
          />
        </View>
        <View style={styles.askContainer}>
          <Text style={styles.lblAsk}>{strings.presentationLetter}</Text>
          <TextInput
            value={form.presentation}
            onValueChange={(value) => handleChange("presentation", value)}
            //label={strings.presentationLabel}
            error={errors.presentation ? errors.presentation : null}
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
