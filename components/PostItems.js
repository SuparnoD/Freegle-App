import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { retrieveImage } from "../util/firebase";

const PostItems = (props) => {
  const [isFav, setIsFav] = useState(false);
  const [imgUrl, setImgUrl] = useState();

  let gradientColor = ["#C4C4C4", "#FFFFFF"];
  Platform.OS === "android"
    ? (gradientColor = ["#C4C4C4", "#C4C4C4", "#FFFFFF"])
    : gradientColor;

  function onClickFav() {
    if (isFav) {
      setIsFav(false);
    } else {
      setIsFav(true);
    }
  }

  useEffect(() => {
    async function getImg() {
      const url = await retrieveImage(props.id);
      setImgUrl(url);
    }
    getImg();
  }, []);

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => {navigation.navigate("PostOverviewScreen",{
      title: props.title,
      description: props.description,
      quantity: props.quantity,
      type: props.type,
      user: props.user,
      imgUrl: imgUrl,
      id: props.id
    })}} style={styles.itemContainer}>
      <LinearGradient colors={gradientColor} style={styles.headerContainer}>
        <Text style={styles.titleText}>{props.title}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ ...styles.text, textTransform: "uppercase" }}>
            {props.type}
          </Text>
          <View style={{ marginLeft: "auto" }}>
            <Text style={styles.text}>{"{x}km"}</Text>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.photoContainer}>
        {Platform.OS === "android" ? (
          <Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
              borderRadius: 20,
            }}
            source={{ uri: imgUrl }}
          />
        ) : (
          <View style={{ height: "100%", width: "50%" }}>
            <Image
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 10,
              }}
              source={{ uri: imgUrl }}
            />
          </View>
        )}
      </View>
      <LinearGradient colors={["#FFFFFF", "#BFBFBF"]}>
        <View style={styles.footer}>
          <View style={styles.descContainer}>
            <Text style={{ ...styles.text }} numberOfLines={2}>
              {props.description}
            </Text>
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
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PostItems;

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 20,
    overflow: "hidden",
    borderColor: "black",
    borderWidth: 0.5,
    margin: 7.5,
    width: "95%",
    height: 300,
  },
  headerContainer: {
    width: "100%",
    height: "22.5%",
    backgroundColor: "#C4C4C4",
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  footer: {
    height: "40%",
    width: "100%",
    flexDirection: "row",
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
    overflow: "hidden",
    marginTop: 10,
    paddingLeft: 10,
  },
  favContainer: {
    width: "25%",
    paddingLeft: "15%",
    justifyContent: "center",
  },
});
