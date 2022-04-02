import { StyleSheet, Text, View, Platform, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import UserIcon from "./UserIcon";
import { Colors } from "../constants/Colors";

const PostItems = (props) => {
  const [isFav, setIsFav] = useState(false);
  const [imgUrl, setImgUrl] = useState();

  function onClickFav() {
    if (isFav) {
      setIsFav(false);
    } else {
      setIsFav(true);
    }
  }

  useEffect(() => {
    async function getImg() {
      const storage = getStorage();
      const reference = ref(storage, "/" + props.id);
      await getDownloadURL(reference).then((x) => {
        setImgUrl(x);
      });
    }
    getImg();
  }, []);

  return (
    <View style={styles.itemContainer}>
      <LinearGradient
        colors={["#C4C4C4", "#C4C4C4", "#FFFFFF"]}
        style={styles.headerContainer}
      >
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
      <LinearGradient colors={["#FFFFFF", "#FFFFFF", "#FFFFFF", "#BFBFBF"]}>
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
    </View>
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
    marginBottom: 15,
  },
  footer: {
    height: "25%",
    width: "100%",
    flexDirection: "row",
    padding: 10,
    marginTop: 20,
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
    paddingBottom: 15,
  },
});
