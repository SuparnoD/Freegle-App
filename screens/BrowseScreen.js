import { StyleSheet, TextInput, View, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { fetchPost } from "../util/http";
import SearchFilter from "../components/SearchFilter";
import PostItems from "../components/PostItems";

const BrowseScreen = () => {
  const [fetchedPosts, setFetchedPosts] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    async function getPosts() {
      const posts = await fetchPost();
      setFetchedPosts(posts);
    }
    getPosts();
  }, []);

  function renderPostItem(itemData) {
    return (
      <PostItems
        title={itemData.item.title}
        description={itemData.item.description}
        quantity={itemData.item.quantity}
        type={itemData.item.type}
        user={itemData.item.user}
        id={itemData.item.img}
      />
    );
  }

  return (
    <View style={styles.container}>
      <SearchFilter />

      <View style={{ flex: 1, width: "90%" }}>
        <FlatList
          data={fetchedPosts}
          keyExtractor={(item) => item.id}
          renderItem={renderPostItem}
        />
      </View>
    </View>
  );
};

export default BrowseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  searchIcon: {
    margin: 5,
  },
});
