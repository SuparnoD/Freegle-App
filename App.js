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
import PostOverviewScreen from "./screens/PostOverviewScreen";
import UserIcon from "./components/UserIcon";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import PostContextProvider from "./store/item-context";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import PostScreen from "./screens/PostScreen";
import ChatIndex from "./screens/chat/Index";
import ChatRoomScreen from "./screens/chat/screens/ChatRoomScreen";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "./constants/Colors";
import CustomDrawer from "./components/CustomDrawer";
import AboutScreen from "./screens/info/AboutScreen";
import ContactScreen from "./screens/info/ContactScreen";
import DisclaimerScreen from "./screens/info/DisclaimerScreen";
import DonateScreen from "./screens/info/DonateScreen";
import PrivacyScreen from "./screens/info/PrivacyScreen";
import TermsScreen from "./screens/info/TermsScreen";

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
      <Stack.Screen
        name="PostOverviewScreen"
        component={PostOverviewScreen}
        options={{ title: "", headerTransparent: false, headerBackVisible: false }}
      />
      <Stack.Screen
        name="ChatIndex"
        component={Login}
        options={{ title: "", headerTransparent: false }}
      />
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{ title: "", headerTransparent: false, headerBackVisible: false }}
      />
      <Stack.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DisclaimerScreen"
        component={DisclaimerScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DonateScreen"
        component={DonateScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PrivacyScreen"
        component={PrivacyScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TermsScreen"
        component={TermsScreen}
        options={{headerShown: false}}
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
        options={{ title: "", headerShown: false }}
      />
      <Stack.Screen
        name="PostOverviewScreen"
        component={PostOverviewScreen}
        options={{ title: "", headerTransparent: false, headerBackVisible: false }}
      />
      <Stack.Screen
        name="ChatIndex"
        component={ChatIndex}
        options={{ title: "", headerShown: false }}
      />
      <Stack.Screen
        name="ChatRoomScreen"
        component={ChatRoomScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: "white",
          headerRight: () => (
            <MaterialCommunityIcons
              name="dots-vertical"
              size={22}
              color="white"
            />
          ),
        })}
      />
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{ title: "", headerTransparent: false, headerBackVisible: false
       }}
      />
    </Stack.Navigator>
  );
}

// // links for drawer navigation
// function DrawerContent(props, { navigation }) {
//   return (
//     <DrawerContentScrollView>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="About"
//         onPress={() => {
//           props.navigation.navigate("Home");
//         }}
//       />
//       <DrawerItem
//         label="Terms"
//         onPress={() => {
//           props.navigation.navigate("Home");
//         }}
//       />
//       <DrawerItem
//         label="Privacy"
//         onPress={() => {
//           props.navigation.navigate("Home");
//         }}
//       />
//       <DrawerItem
//         label="Disclaimer"
//         onPress={() => {
//           props.navigation.navigate("Home");
//         }}
//       />
//       <DrawerItem
//         label="Donate"
//         onPress={() => {
//           props.navigation.navigate("Home");
//         }}
//       />
//       <DrawerItem
//         label="Contact"
//         onPress={() => {
//           props.navigation.navigate("Home");
//         }}
//       />
//       <DrawerItem
//         label="Chat"
//         onPress={() => {
//           props.navigation.navigate("ChatIndex");
//         }}
//       />
//     </DrawerContentScrollView>
//   );
// }

function whichStack() {
  const authCtx = useContext(AuthContext);

  if (!authCtx.isAuthenticated) {
    return AuthStack;
  } else {
    return AuthenticatedStack;
  }
}

const Logout = ({navigation}) => {
  const authCtx = useContext(AuthContext);
  authCtx.logout();
  navigation.navigate("Home");
  return null;
}

// stack is rendered depending on whether a user is authenticated or not
function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={({ navigation }) => ({
          headerTransparent: true,
          drawerLabelStyle: { fontFamily: "lato-black" },
          drawerActiveBackgroundColor: Colors.primary,
          drawerActiveTintColor: "#fff",
          headerRight: () => {
            if (!authCtx.isAuthenticated) {
              return (
                <UserIcon onClick={() => navigation.navigate("Login")}>
                  <FontAwesome name="user-o" size={24} color="white" />
                </UserIcon>
              );
            } else {
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
            }
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
        })}
      >
        <Drawer.Screen
          name="Stack"
          component={whichStack()}
          options={{
            drawerItemStyle: { height: 0 },
            headerTitle: "",
          }}
        />
        <Drawer.Screen
          name="Browse"
          component={BrowseScreen}
          options={{
            drawerIcon: ({ color }) => (
              <AntDesign name="search1" size={22} color={color} />
            ),
            headerTitle: "",
          }}
        />
        <Drawer.Screen
          name="Post"
          component={authCtx.isAuthenticated ? PostScreen : Login}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="add-circle-outline" size={22} color={color} />
            ),
            headerTitle: "",
          }}
        />
        <Drawer.Screen
          name="Chat"
          component={authCtx.isAuthenticated ? ChatIndex : Login}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="chatbox-outline" size={22} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Map"
          component={Home}
          options={{
            drawerIcon: ({ color }) => (
              <Feather name="map-pin" size={22} color={color} />
            ),
            headerTitle: "",
          }}
        />
        <Drawer.Screen
          name={authCtx.isAuthenticated ? "Logout" : "Login"}
          component={!authCtx.isAuthenticated ? Login : Logout}
          options={{
            drawerIcon: ({ color }) => (
              <AntDesign name={
                authCtx.isAuthenticated ? "logout" : "login"
              } size={22} color={color} />
            ),
            headerTitle: "",
          }}
        />
        <Drawer.Screen
          name="ChatRoomScreen"
          component={ChatRoomScreen}
          options={{
            drawerItemStyle: { height: 0 },
            headerShown: false
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
