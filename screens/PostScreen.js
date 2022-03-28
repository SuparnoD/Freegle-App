import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { Colors } from "../constants/Colors";

const PostScreen = () => {
    const [offerColor, setOfferColor] = useState(Colors.primary);
    const [wantedColor, setWantedColor] = useState("white");
    const [offerLabel, setOfferLabel] = useState("white");
    const [wantedLabel, setWantedLabel] = useState("grey");

    const offerClicked = () => {
        setOfferColor(Colors.primary);
        setWantedColor("white");

        setOfferLabel("white"),
        setWantedLabel("grey");
    };

    const wantedClicked = () => {
        setOfferColor("white");
        setWantedColor(Colors.primary);

        setOfferLabel("grey"),
        setWantedLabel("white");
    };

  return (
    <View style={styles.container}>
      <View style={styles.addPhotoContainer}>
        <View style={styles.header}>
          <Text style={styles.label}>Add Photos</Text>
        </View>
      </View>

      <View style={styles.productContainer}>
        <View style={styles.header}>
          <Text style={styles.label}>What Is It?</Text>
        </View>
      </View>

      <View style={styles.container2}>
        <View style={styles.typeContainer}>
          <TouchableOpacity style={{...styles.button, backgroundColor: offerColor}} onPress={() => {offerClicked()}}>
            <Text style={{...styles.label, color: offerLabel}}>Offer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.button, backgroundColor: wantedColor}} onPress={() => {wantedClicked()}}>
            <Text style={{...styles.label, color: wantedLabel}}>Wanted</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.quantityContainer}>
          <View style={{...styles.button, backgroundColor: Colors.primary}}>
            <Text style={styles.label}>Quantity</Text>
          </View>
          <View style={styles.quantity}></View>
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <View style={styles.header}>
          <Text style={styles.label}>
            Description - e.g colour, size, condition
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.postButton}
          onPress={() => {
          }}
        >
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
    marginVertical: 10,
  },
  descriptionContainer: {
    height: "25%",
    width: "90%",
    borderWidth: 1.5,
    borderColor: "#90EE90",
    borderRadius: 15,
    overflow: "hidden",
    marginVertical: 10,
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
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  typeContainer: {
    flexDirection: "row",
    borderWidth: 1.5,
    height: 40,
    width: "40%",
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
    height: "100%",
    width: "50%",
  },
  buttonContainer: {
      left: "25%"
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
});
