import { StyleSheet, Button, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useState } from "react";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";

import { Colors } from "../constants/Colors";
import { storePost } from "../util/http";
import ImagePicker from "../components/ImagePicker";

const PostScreen = () => {
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("offer");
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  const [offerColor, setOfferColor] = useState(Colors.primary);
  const [wantedColor, setWantedColor] = useState("white");
  const [offerLabel, setOfferLabel] = useState("white");
  const [wantedLabel, setWantedLabel] = useState("grey");

  const offerClicked = () => {
    setType("offer");

    setOfferColor(Colors.primary);
    setWantedColor("white");
    setOfferLabel("white"), setWantedLabel("grey");
  };

  const wantedClicked = () => {
    setType("wanted");

    setOfferColor("white");
    setWantedColor(Colors.primary);
    setOfferLabel("grey"), setWantedLabel("white");
  };

  const qtyIncrementHandler = () => {
    setQuantity(quantity+1)
  };

  const qtyDecrementHandler = () => {
    if (quantity === 1) {
    } else {
      setQuantity(quantity-1);
    }
  };

  function onclick(){
    console.log(`Title: ${title} \nType: ${type}\nQty: ${quantity}\nDescription: ${description}`);
    const postData = {
      title: title,
      type: type,
      quantity: quantity,
      description: description
    };

    storePost(postData);
  }

  return (
    <View style={styles.container}>
      <View style={styles.addPhotoContainer}>
        <View style={styles.header}>
          <Text style={styles.label}>Add Photos</Text>
        </View>
        <ImagePicker />
      </View>

      <View style={styles.productContainer}>
        <View style={styles.header}>
          <Text style={styles.label}>What Is It?</Text>
        </View>
        <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
        <TextInput
              style={styles.input}
              onChangeText={(newText) => setTitle(newText)}
            />
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>

      <View style={styles.container2}>
        <View style={styles.typeContainer}>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: offerColor }}
            onPress={() => {
              offerClicked();
            }}
          >
            <Text style={{ ...styles.label, color: offerLabel }}>Offer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: wantedColor }}
            onPress={() => {
              wantedClicked();
            }}
          >
            <Text style={{ ...styles.label, color: wantedLabel }}>Wanted</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.quantityContainer}>
          <View style={{ ...styles.button, backgroundColor: Colors.primary }}>
            <Text style={styles.label}>Quantity</Text>
          </View>
          <View style={styles.quantity}>
          <TouchableOpacity
              style={{ ...styles.incdec }}
              onPress={() => qtyDecrementHandler()}
            >
              <AntDesign name="minus" size={24} color="black" />
            </TouchableOpacity>
            <View
              style={{
                width: "33%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>{quantity}</Text>
            </View>
            <TouchableOpacity
              style={{ ...styles.incdec }}
              onPress={() => qtyIncrementHandler()}
            >
              <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <View style={styles.header}>
          <Text style={styles.label}>
            Description - e.g colour, size, condition
          </Text>
        </View>
        <View>
        <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
        <TextInput
              style={styles.input}
              onChangeText={(newText) => setDescription(newText)}
              multiline={true}
            />
            </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View>
        </View>


      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.postButton} onPress={() => onclick()}>
          <View style={styles.buttonStyle}>
            <Text
              style={{
                color: Colors.primary,
                fontFamily: "lato-regular",
                fontSize: 20,
              }}
            >
              POST
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  addPhotoContainer: {
    height: "30%",
    width: "90%",
    borderWidth: 1.5,
    borderColor: "#90EE90",
    borderRadius: 15,
    overflow: "hidden",
    marginVertical: 10,
  },
  productContainer: {
    height: "7.5%",
    width: "90%",
    borderWidth: 1.5,
    borderColor: "#90EE90",
    borderRadius: 15,
    overflow: "hidden",
  },
  descriptionContainer: {
    height: "25%",
    width: "90%",
    borderWidth: 1.5,
    borderColor: "#90EE90",
    borderRadius: 15,
    overflow: "hidden",
  },
  header: {
    height: 25,
    width: "100%",
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "white",
    fontFamily: "lato-regular",
  },
  container2: {
    width: "90%",
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  typeContainer: {
    flexDirection: "row",
    borderWidth: 1.5,
    height: 40,
    width: "50%",
    justifyContent: "center",
    borderRadius: 15,
    overflow: "hidden",
    marginHorizontal: 5,
    borderColor: "#90EE90",
  },
  quantityContainer: {
    flexDirection: "row",
    borderWidth: 1.5,
    height: 40,
    width: "50%",
    justifyContent: "center",
    borderRadius: 15,
    overflow: "hidden",
    borderColor: "#90EE90",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "50%",
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    width: "50%",
  },
  buttonContainer: {
    left: "25%",
    top: 20,
  },
  postButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    backgroundColor: "white",
    width: 150,
    height: 50,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
  },
  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  incdec: {
    backgroundColor: "#90EE90",
    height: "100%",
    width: "34%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    paddingHorizontal: 10,
    fontFamily: "lato-regular"
  }
});
