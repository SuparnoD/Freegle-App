import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from '@expo/vector-icons';

const UserIcon = props => {
  return (
    <View style={{marginRight: 25, marginTop: 5}}>
      <TouchableOpacity style={styles.iconBG} onPress={props.onClick}>
      <FontAwesome name="user-o" size={24} color="white" />
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
  },
});
