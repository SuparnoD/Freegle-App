import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import UserIcon from "./UserIcon";
import { Colors } from "../constants/Colors";

const PostItems = (props) => {
  const [isFav, setIsFav] = useState(false);

  function onClickFav() {
    if (isFav) {
      setIsFav(false);
    } else {
      setIsFav(true);
    }
  }

  return (
    <View style={styles.itemContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>{props.title}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ ...styles.text, textTransform: "uppercase" }}>
            {props.type}
          </Text>
          <View style={{ marginLeft: "auto" }}>
            <Text style={styles.text}>{"{x}km"}</Text>
          </View>
        </View>
      </View>
      <View style={styles.photoContainer}>
        <Image
          style={{ flex: 1, resizeMode: "contain" }}
          source={require("../assets/image-placeholder.jpeg")}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.descContainer}>
          <Text>{props.description}</Text>
          <Text>{props.quantity}</Text>
          <Text>{props.user}</Text>
        </View>
        <View style={styles.favContainer}>
          {!isFav ? (
            <AntDesign
              name="hearto"
              size={30}
              color="black"
              onPress={() => onClickFav()}
            />
          ) : (
            <AntDesign
              name="heart"
              size={30}
              color="black"
              onPress={() => onClickFav()}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default PostItems;

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 20,
    overflow: "hidden",
    borderColor: "black",
    borderWidth: 1,
    margin: 7.5,
    width: "95%",
    height: 250,
  },
  headerContainer: {
    width: "100%",
    height: "20%",
    backgroundColor: "#C4C4C4",
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  footer: {
    backgroundColor: "#C4C4C4",
    height: "25%",
    width: "100%",
    flexDirection: "row",
    padding: 10,
  },
  photoContainer: {
    height: "55%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 18,
    fontFamily: "lato-bold",
  },
  text: {
    fontFamily: "lato-regular",
  },
  descContainer: {
    width: "75%",
  },
  favContainer: {
    width: "25%",
    paddingLeft: "15%",
    justifyContent: "center",
  },
});
