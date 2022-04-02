import { StyleSheet, TextInput, View, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { fetchPost } from "../util/http";
import BrowseDropdown from "../components/BrowseDropdown";
import PostItems from "../components/PostItems";

const BrowseScreen = () => {
  const [fetchedPosts, setFetchedPosts] = useState([]);
  const [dropdownSelected, setDropdownSelected] = useState(false);

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
      <View style={styles.topContainer}>
        <View style={styles.searchContainer}>
          <View style={styles.searchIcon}>
            <Feather name="search" size={20} color="black" />
          </View>
          <TextInput style={{ width: "75%" }} placeholder="Search..." />
        </View>
        <View style={styles.dropDownContainer}>
          <AntDesign name="down" size={24} color="black" onPress={() => setDropdownSelected(true)} />
        </View>
      </View>

      <View style={{ flex: 1, width: "90%"}}>
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
  topContainer: {
    top: "25%",
    width: "75%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 120,
  },
  searchContainer: {
    width: "90%",
    height: 35,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "grey",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  searchIcon: {
    margin: 5,
  },
});
