import "react-native-gesture-handler";
import React, { Component, useContext, useState } from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import BrowseScreen from "./screens/BrowseScreen";
import UserIcon from "./components/UserIcon";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import PostContextProvider from "./store/item-context";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import PostScreen from "./screens/PostScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// fetch fonts
const fetchFonts = () => {
  return Font.loadAsync({
    // lato
    "lato-black": require("./assets/fonts/Lato/Lato-Black.ttf"),
    "lato-black-italic": require("./assets/fonts/Lato/Lato-BlackItalic.ttf"),
    "lato-bold": require("./assets/fonts/Lato/Lato-Bold.ttf"),
    "lato-bold-italic": require("./assets/fonts/Lato/Lato-BoldItalic.ttf"),
    "lato-italic": require("./assets/fonts/Lato/Lato-Italic.ttf"),
    "lato-light": require("./assets/fonts/Lato/Lato-Light.ttf"),
    "lato-light-italic": require("./assets/fonts/Lato/Lato-LightItalic.ttf"),
    "lato-regular": require("./assets/fonts/Lato/Lato-Regular.ttf"),
    "lato-thin": require("./assets/fonts/Lato/Lato-Thin.ttf"),
    "lato-thin-italic": require("./assets/fonts/Lato/Lato-ThinItalic.ttf"),
  });
};

// unauthenticated stack
function AuthStack() {
  const authCtx = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerTransparent: true,
        headerRight: () => {
          return (
            <UserIcon onClick={() => navigation.navigate("Login")}>
              <FontAwesome name="user-o" size={24} color="white" />
            </UserIcon>
          );
        },
        headerLeft: () => {
          return (
            <Feather
              style={{ marginLeft: 10, marginTop: 5 }}
              name="menu"
              size={30}
              color="black"
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          );
        },
        drawerContentStyle: {
          backgroundColor: "#e5f6df",
        },
        overlayColor: "rgba(0,0,0,0.5)",
      })}
    >
      <Stack.Screen name="Home" component={Home} options={{ title: "" }} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BrowseScreen"
        component={BrowseScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="PostScreen"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

// authenticated stack
function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerTransparent: true,
        headerTitle: "",
        headerRight: () => {
          return (
            <UserIcon
              onClick={() => {
                authCtx.logout();
                navigation.navigate("Home");
              }}
            >
              <Image
                style={{ flex: 1, resizeMode: "contain" }}
                // API to fetch user profile image could be inserted here
                source={require("./assets/pakalu.png")}
              />
            </UserIcon>
          );
        },
        headerLeft: () => {
          return (
            <Feather
              style={{ marginLeft: 10, marginTop: 5 }}
              name="menu"
              size={30}
              color="black"
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          );
        },
        drawerContentStyle: {
          backgroundColor: "#e5f6df",
        },
        overlayColor: "rgba(0,0,0,0.5)",
      })}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "" }}
      />
      <Stack.Screen
        name="BrowseScreen"
        component={BrowseScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="PostScreen"
        component={PostScreen}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
}

// links for drawer navigation
function DrawerContent(props, { navigation }) {
  return (
    <DrawerContentScrollView>
      <DrawerItemList {...props} />
      <DrawerItem
        label="About"
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
      <DrawerItem
        label="Terms"
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
      <DrawerItem
        label="Privacy"
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
      <DrawerItem
        label="Disclaimer"
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
      <DrawerItem
        label="Donate"
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
      <DrawerItem
        label="Contact"
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
      <DrawerItem
        label="Browse for testing"
        onPress={() => {
          props.navigation.navigate("BrowseScreen");
        }}
      />
    </DrawerContentScrollView>
  );
}

function whichStack() {
  const authCtx = useContext(AuthContext);

  if (!authCtx.isAuthenticated) {
    return AuthStack;
  } else {
    return AuthenticatedStack;
  }
}

// stack is rendered depending on whether a user is authenticated or not
function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen
          name="Stack"
          component={whichStack()}
          options={{
            drawerItemStyle: { height: 0 },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <AuthContextProvider>
      <PostContextProvider>
      <Navigation />
      </PostContextProvider>
    </AuthContextProvider>
  );
}
