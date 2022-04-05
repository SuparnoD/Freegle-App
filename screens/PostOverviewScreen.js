import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const PostOverviewScreen = () => {
  const route = useRoute();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: "100%",
          marginTop: Dimensions.get("window").height > 700 ? "-20%" : "-15%",
        }}
      >
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <View style={styles.titleContainer}>
            <Text style={styles.headerText}>{route.params.title}</Text>
            <Text style={styles.offerText}>{route.params.type}</Text>
          </View>
          <View style={styles.shareContainer}>
            <AntDesign name="sharealt" size={24} color="black" />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.imageContainer}>
            <Image
              style={{
                width: 350,
                height: 250,
                borderRadius: 10,
                resizeMode: "contain",
              }}
              source={{ uri: route.params.imgUrl }}
            />
          </View>
        </View>

        <View style={styles.photoContainer}>
          <Text>Placeholder for photo</Text>
        </View>
        <View style={styles.descContainer}>
          <Text style={{fontFamily: "lato-regular"}}>
            {route.params.description}
          </Text>
          <Text>Qty: {route.params.quantity}</Text>
          <Text>Posted by: {route.params.user}</Text>
        </View>
        <View style={styles.mapContainer}>
          <Text>Placeholder for map</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostOverviewScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  titleContainer: {
    width: "90%",
    paddingHorizontal: 20,
    top: Dimensions.get("window").height > 700 ? "25%" : "20%",
  },
  imageContainer: {
    top: Dimensions.get("window").height > 700 ? "25%" : "20%",
  },
  headerText: {
    fontFamily: "lato-black",
    fontSize: 24,
  },
  shareContainer: {
    marginLeft: "auto",
    paddingRight: 20,
    top: Dimensions.get("window").height > 700 ? "30%" : "20%",
  },
  offerText: {
    textTransform: "uppercase",
    fontFamily: "lato-light",
  },
  photoContainer: {
    height: Dimensions.get("window").height > 700 ? 125 : 100,
    width: "90%",
    backgroundColor: "#eeeeee",
    borderColor: "#999999",
    top: Dimensions.get("window").height > 700 ? 125 : 100,
    borderRadius: 5,
    borderWidth: 0.5,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  descContainer: {
    paddingHorizontal: 25,
    top: Dimensions.get("window").height > 700 ? 140 : 110,
  },
  mapContainer:{
    height: Dimensions.get("window").height > 700 ? 125 : 100,
    width: "90%",
    marginBottom: Dimensions.get("window").height > 700 ? "-60%" : "-70%",
    backgroundColor: "#eeeeee",
    borderColor: "#999999",
    top: Dimensions.get("window").height > 700 ? 150 : 125,
    borderRadius: 2.5,
    borderWidth: 0.5,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
