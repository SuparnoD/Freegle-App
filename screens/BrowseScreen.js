import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchPost } from "../util/http";
import PostItems from "../components/PostItems";

const BrowseScreen = () => {
  const [fetchedPosts, setFetchedPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const posts = await fetchPost();
      setFetchedPosts(posts);
    }
    getPosts();
  }, []);

  function renderPostItem(itemData) {
    return (<PostItems 
      title={itemData.item.title}
      description={itemData.item.description}
      quantity={itemData.item.quantity}
      type={itemData.item.type}
      user={itemData.item.user}/>);
  }

  return <View style={styles.container}>
    <FlatList 
    data={fetchedPosts}
    keyExtractor={(item) => item.id} 
    renderItem={renderPostItem} />
  </View>;
};

export default BrowseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
