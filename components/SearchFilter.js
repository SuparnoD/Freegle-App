import { StyleSheet, TextInput, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const SearchFilter = () => {
  const [dropdownClicked, setDropdownClicked] = useState(false);

  function dropdownOnClick() {
    if (dropdownClicked) {
      return (
        <View style={styles.filter}>
          <Text style={{fontFamily: "lato-black", marginBottom: 10}}>Filter By:</Text>
          <Text style={{fontFamily: "lato-regular", marginBottom: 10}}>Distance</Text>
          <View style={{flexDirection: "row", justifyContent: "space-around"}}>
              <TouchableOpacity style={styles.btn}>
                  <Text style={{fontFamily: "lato-regular"}}>OFFER</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                  <Text style={{fontFamily: "lato-regular"}}>WANTED</Text>
              </TouchableOpacity>
          </View>
        </View>
      );
    }

    if (!dropdownClicked) {
      return <View></View>;
    }
  }

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.searchIcon}>
            <Feather name="search" size={20} color="black" />
          </View>
          <TextInput style={{ width: "75%" }} placeholder="Search..." />
        </View>
        <View style={styles.dropDownContainer}>
          <AntDesign
            name={
                dropdownClicked ? "up" : "down"
            }
            size={24}
            color="black"
            onPress={() => setDropdownClicked(!dropdownClicked)}
          />
        </View>
      </View>
      <View>{dropdownOnClick()}</View>
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  container: {
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
  filter: {
    width: "100%",
    height: 100,
    bottom: 15,
    paddingHorizontal: 10
  },
  btn: {
      borderWidth: 1,
      borderRadius: 10,
      width: 75,
      height: 25,
      justifyContent: "center",
      alignItems: "center"
  }
});
