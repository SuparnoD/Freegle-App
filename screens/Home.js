import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from "react-native";

import { Colors } from "../constants/Colors";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.heading}>
          DON'T THROW IT AWAY,{"\n"}GIVE IT AWAY!
        </Text>
      </View>
      <View style={{marginBottom: 10, bottom: 20}}>
        <Text style={{fontFamily: 'lato-italic'}}>What would you like to do?</Text>
      </View>

      <View style={{ bottom: 20}}>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("PostScreen")}}>
          <View style={styles.buttonStyle}>
            <Text style={{ color: "white", fontFamily: 'lato-regular', fontSize: 20 }}>POST</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => {navigation.navigate("BrowseScreen")}}>
          <View style={styles.buttonStyle}>
            <Text style={{ color: Colors.primary, fontFamily: 'lato-regular', fontSize: 20 }}>BROWSE</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ position: "absolute", bottom: Dimensions.get("window").height > 700 ? 15 : 0, paddingTop: 100 }}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/bytemark.png")} />
          <Image source={require("../assets/mythic-beasts.png")} />
        </View>

        <Text style={{ textAlign: "center", fontSize: 12, fontFamily: 'lato-regular' }}>
          Freegle is registered as a charity with HMRC (ref. XT32865) {"\n"}{" "}
          Kindly supported by Bytemark & Mythic Beasts
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    bottom: 70,
  },
  heading: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: 'lato-regular'
  },
  logo: {
    margin: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
    width: 250,
    height: 50,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
    margin: 12,
  },
  button2: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    backgroundColor: "white",
    width: 250,
    height: 50,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
    margin: 12,
  },
  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 350,
  },
  bottomContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 5,
    justifyContent: "space-around",
    width: 350,
  },
  bottomText: {
    fontSize: 12,
    textAlign: "center",
  },
});

export default Home;
