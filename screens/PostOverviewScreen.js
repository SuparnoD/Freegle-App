import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { getStorage } from "firebase/storage";

const PostOverviewScreen = () => {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <Text>{route.params.title}</Text>
      <View style={{ height: "20%", width: "50%" }}>
        <Image
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
          }}
          source={{ uri: route.params.imgUrl }}
        />
      </View>
      <Text>{route.params.description}</Text>
      <Text>Qty: {route.params.quantity}</Text>
      <Text>Post Type: {route.params.type}</Text>
      <Text>Posted by: {route.params.user}</Text>
    </View>
  );
};

export default PostOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
