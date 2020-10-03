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

const index = (props) => {
  const {
    ui: { strings, loading },
    user,
    navigation,
  } = props;

  const states = [
    { label: "teste", value: 2 },
    { label: "teste", value: 1 },
    { label: "teste", value: 3 },
  ];
  const [photoChanged, setPhotoChanged] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    photo: { uri: user.photo },
    email: "",
    gender: "",
    nationality: "",
    bornDay: "",
    presentation: "",
    linkedin: "",
    facebook: "",
    twitter: "",
    course: "",
    institution: "",
    changes: false,
  });

  const handleChange = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const addPhoto = () => {
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
          const aux = form.photos;
          aux.push(res);
          handleChange("photos", aux);
        }
      })
      .catch((err) => console.log(err));
  };

  const remPhoto = (item) => {
    const aux = [];
    form.photos.forEach((photo) => {
      if (photo.uri !== item.uri) aux.push(photo);
    });
    handleChange("photos", aux);
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

  const validateData = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button
          text={strings.backToProfile}
          type="outlined"
          textColor={colorUnselected}
          containerStyle={{ width: 200 }}
          onPress={() => navigation.pop()}
        />
        <Button
          text={strings.save}
          type="contained"
          color={colorPrimary}
          containerStyle={{ width: 200 }}
          disabled={loading || !form.changes}
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

const mapDispatchToProps = {};

index.propTypes = {
  ui: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
