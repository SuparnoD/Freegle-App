import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AboutScreen = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>About Us</Text>
      </View>
      <View style={styles.container}></View>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    top: "200%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
      fontSize: 30,
      fontFamily: "lato-black"
  }
});
