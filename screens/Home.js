import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { Colors } from "../constants/Colors";

const Home = () => {
  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Text style={styles.heading}>
        Don't throw it away,{"\n"}give it away!
      </Text>
      </View>

      <Text>What would you like to do?</Text>

      <View style={{marginBottom: 0}}>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonStyle}>
            <View style={{ right: 10 }}>
              <AntDesign name="message1" size={24} color="white" />
            </View>
            <Text style={{ color: "white" }}>Message</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonStyle}>
            <View style={{ right: 25 }}>
              <Feather name="map-pin" size={28} color="white" />
            </View>
            <Text style={{ color: "white" }}>Map</Text>
          </View>
        </TouchableOpacity>

      </View>

      <View style={{position: 'absolute', bottom: 15,}}>
      <View style={styles.logoContainer}>
      <Image source={require("../assets/bytemark.png")} />
      <Image source={require("../assets/mythic-beasts.png")} />
      </View>

      <Text style={{ textAlign: "center", fontSize: 12 }}>
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
  },
  logo: {
    margin: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: Colors.primary,
    width: 130,
    height: 58,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
    margin: 3.5,
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
  bottomContainer:{
    flexDirection: "row",
    position: 'absolute',
    bottom: 5,
    justifyContent: "space-around",
    width: 350,
  },
  bottomText: {
      fontSize: 12,
      textAlign: "center"
  }
});

export default Home;
