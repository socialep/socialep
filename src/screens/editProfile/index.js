import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Button } from "material-bread";
import * as ImagePicker from "expo-image-picker";

//Components
import TextInput from "../../components/TextInput";
import MultilineTextField from "../../components/MultilineTextField";
import Picker from "../../components/Picker";

//Util
import styles from "./styles";
import { colorUnselected, colorPrimary } from "../../utils/colors";

//Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editProfile } from "../../redux/actions/userActions";

const index = (props) => {
  const {
    ui: { strings, loading },
    user,
    navigation,
    editProfile,
  } = props;

  const [photoChanged, setPhotoChanged] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: user.name,
    photo: { uri: user.photo },
    email: user.email,
    gender: user.gender,
    nationality: user.nationality,
    bornDay: user.bornDay,
    presentation: user.presentation,
    linkedin: user.linkedin,
    facebook: user.facebook,
    twitter: user.twitter,
    course: user.course,
    institution: user.institution,
    changes: false,
  });

  const handleChange = (key, value) => {
    setForm({
      ...form,
      [key]: value,
      changes: true,
    });
  };

  const chooseImage = () => {
    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      allowsMultipleSelection: false,
    };
    ImagePicker.requestCameraRollPermissionsAsync()
      .then((permission) => {
        if (permission.granted)
          return ImagePicker.launchImageLibraryAsync(options);
        return false;
      })
      .then((res) => {
        if (!res.cancelled) {
          setPhotoChanged(true);
          handleChange("photo", res);
        }
      })
      .catch((err) => console.log(err));
  };

  const validateData = () => {
    let mErrors = {};

    if (form.name.length == 0 || form.name.trim === "")
      mErrors.name = strings.mustNotBeEmpty;

    if (form.email.length == 0 || form.email.trim === "")
      mErrors.email = strings.mustNotBeEmpty;

    setErrors(mErrors);
    if (Object.keys(mErrors).length > 0) return;

    let changes = {};

    if (form.name !== user.name) changes.name = form.name;
    if (form.email !== user.email) changes.email = form.email;
    if (form.gender !== user.gender) changes.gender = form.gender;
    if (form.nationality !== user.nationality)
      changes.nationality = form.nationality;
    if (form.bornDay !== user.bornDay) changes.bornDay = form.bornDay;
    if (form.presentation !== user.presentation)
      changes.presentation = form.presentation;
    if (form.linkedin !== user.linkedin) changes.linkedin = form.linkedin;
    if (form.facebook !== user.facebook) changes.facebook = form.facebook;
    if (form.twitter !== user.twitter) changes.twitter = form.twitter;
    if (form.course !== user.course) changes.course = form.course;
    if (form.institution !== user.institution)
      changes.institution = form.institution;

    const photoForm = photoChanged ? new FormData() : null;

    if (photoChanged)
      photoForm.append("image", {
        name: "profile.jpg",
        type: "image/jpg",
        uri:
          Platform.OS === "android"
            ? form.photo.uri
            : form.photo.uri.replace("file:/", ""),
      });

    editProfile(photoForm, user.id, changes);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button
          text={strings.backToProfile}
          type="outlined"
          textColor={colorUnselected}
          containerStyle={{ width: 200 }}
          disabled={loading}
          onPress={() => navigation.pop()}
        />
        <Button
          text={strings.save}
          type="contained"
          color={colorPrimary}
          containerStyle={{ width: 200 }}
          disabled={loading || !form.changes}
          onPress={validateData}
        />
      </View>
      <ScrollView style={styles.content}>
        <Image source={{ uri: form.photo.uri }} style={styles.imgUser} />
        <TouchableOpacity
          style={styles.editPhotoCotainer}
          onPress={chooseImage}
        >
          <Text style={styles.lblEditPhoto}>{strings.editPhoto}</Text>
        </TouchableOpacity>
        <View style={styles.sectionContaienr}>
          <Text style={styles.lblSection}>{strings.personalData}</Text>
          <TextInput
            value={form.name}
            onValueChange={(value) => handleChange("name", value)}
            label={strings.name}
            autoCapitalize="words"
            error={errors.name ? errors.name : null}
          />
          <TextInput
            value={form.email}
            onValueChange={(value) => handleChange("email", value)}
            label={strings.email}
            error={errors.email ? errors.email : null}
            keyboardType="email-address"
          />
          <TextInput
            value={form.gender}
            onValueChange={(value) => handleChange("gender", value)}
            label={strings.gender}
            error={errors.gender ? errors.gender : null}
          />
          <TextInput
            value={form.nationality}
            onValueChange={(value) => handleChange("nationality", value)}
            label={strings.nationality}
            error={errors.nationality ? errors.nationality : null}
          />
          <TextInput
            value={form.bornDay}
            onValueChange={(value) => handleChange("bornDay", value)}
            label={strings.bornDay}
            error={errors.bornDay ? errors.bornDay : null}
            type="date"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.sectionContaienr}>
          <Text style={styles.lblSection}>{strings.presentation}</Text>
          <MultilineTextField
            value={form.presentation}
            onValueChange={(value) => handleChange("presentation", value)}
            autoCapitalize="sentences"
            error={errors.presentation ? errors.presentation : null}
            placeholder={strings.typeSomething}
          />
        </View>
        <View style={styles.sectionContaienr}>
          <Text style={styles.lblSection}>{strings.socialMedia}</Text>
          <TextInput
            value={form.linkedin}
            onValueChange={(value) => handleChange("linkedin", value)}
            label={strings.linkedin}
            error={errors.linkedin ? errors.linkedin : null}
          />
          <TextInput
            value={form.facebook}
            onValueChange={(value) => handleChange("facebook", value)}
            label={strings.facebook}
            error={errors.facebook ? errors.facebook : null}
          />
          <TextInput
            value={form.twitter}
            onValueChange={(value) => handleChange("twitter", value)}
            label={strings.twitter}
            error={errors.twitter ? errors.twitter : null}
          />
        </View>
        <View style={styles.sectionContaienr}>
          <Text style={styles.lblSection}>{strings.graduation}</Text>
          <TextInput
            value={form.institution}
            onValueChange={(value) => handleChange("institution", value)}
            label={strings.institution}
            error={errors.institution ? errors.institution : null}
          />
          <TextInput
            value={form.course}
            onValueChange={(value) => handleChange("course", value)}
            label={strings.course}
            error={errors.course ? errors.course : null}
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

const mapDispatchToProps = {
  editProfile,
};

index.propTypes = {
  ui: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  editProfile: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
