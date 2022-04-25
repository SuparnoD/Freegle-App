import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WebView from "react-native-webview";

const DonateScreen = () => {
  return (
    <WebView source={{ uri: "https://www.ilovefreegle.org/donate" }} />
  );
};

export default DonateScreen;

const styles = StyleSheet.create({});
