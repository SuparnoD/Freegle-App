import { View, Button, Alert, Image, Text, StyleSheet } from "react-native";
import { useState } from "react";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";

const ImagePicker = (props) => {
  const [pickedImage, setPickedImage] = useState();
  const savedImages = [];

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const persmissionRespone = await requestPermission();

      return persmissionRespone.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permission: you need to grant camera permission in your phone settings"
      );
      return false;
    }
    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      // different configs available - check doc (expo image picker)
    });
    setPickedImage(image.uri);
  }

  let imagePreview = <Text>Nae Image Taken Yet</Text>;

  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
    const postData = {
        photo: pickedImage
      };
  }

  return (
    <View>
      <View style={styles.imagePreview}>
          {imagePreview}
      </View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "50%",
    height: 150,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
});
