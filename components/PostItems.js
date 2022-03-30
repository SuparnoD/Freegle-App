import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import UserIcon from "./UserIcon";

const PostItems = (props) => {
  return (
    <View style={styles.postItem}>
      <UserIcon onClick={() => {}}>
        <Image
          style={{ flex: 1, resizeMode: "contain" }}
          source={require("../assets/pakalu.png")}
        />
      </UserIcon>
      <Text>{props.title}</Text>
      <Text>{props.description}</Text>
      <Text>{props.quantity}</Text>
      <Text>{props.type}</Text>
      <Text>{props.user}</Text>
    </View>
  );
};

export default PostItems;

const styles = StyleSheet.create({
  postItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
});
