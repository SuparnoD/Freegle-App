import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";

const CustomDrawer = (props, { navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Image
          source={require("../assets/logo.png")}
          style={{ height: "100%", width: "100%", resizeMode: "contain" }}
        />
      </View>
      <DrawerContentScrollView {...props} contentContainerStyle={{}}>
        <View style={styles.itemList}>
          <DrawerItemList {...props} />
        </View>
        <View
          style={{
            borderBottomColor: "grey",
            borderBottomWidth: 0.5,
            width: "75%",
            bottom: 10,
            left: "10%",
          }}
        />
        <View style={styles.bottomNav}>
          <Text
            style={styles.subNav}
            onPress={() => {
              props.navigation.navigate("AboutScreen");
            }}
          >
            About
          </Text>
          <Text style={styles.subNav}>Terms</Text>
          <Text style={styles.subNav}>Privacy</Text>
          <Text style={styles.subNav}>Disclaimer</Text>
          <Text style={styles.subNav}>Donate</Text>
          <Text style={styles.subNav}>Contact</Text>
        </View>
      </DrawerContentScrollView>
      <View style={{ bottom: 10 }}>
        <Text style={styles.infoText}>
          Freegle is registered as a charity with HMRC{"\n"}(ref. XT32865)
        </Text>
        <Text style={styles.infoText}>
          Kindly supported by Bytemark & Mythic Beasts
        </Text>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f3fcf0",
    alignItems: "center",
    height: Dimensions.get("window").height > 700 ? "30%" : "20%",
  },
  itemList: {
    padding: 10,
    bottom: 20,
  },
  infoText: {
    textAlign: "center",
    fontFamily: "lato-regular",
    fontSize: 10,
  },
  bottomNav: {
    padding: 20,
    bottom: 25,
  },
  subNav: {
    margin: Dimensions.get("window").height > 700 ? 10 : 8,
    fontSize: 12,
  },
});
