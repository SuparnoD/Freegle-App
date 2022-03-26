import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const UserIcon = props => {
  return (
    <View style={{marginRight: 25, marginTop: 5}}>
      <TouchableOpacity style={styles.iconBG} onPress={props.onClick}>
        {props.children}
      </TouchableOpacity>
    </View>
  );
};

export default UserIcon;

const styles = StyleSheet.create({
  iconBG: {
    backgroundColor: "black",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    overflow: "hidden"
  },
});
