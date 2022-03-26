import "react-native-gesture-handler";
import React, { useContext, useState } from "react";
import { Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import UserIcon from "./components/UserIcon";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from "./constants/Colors";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// fetch fonts
const fetchFonts = () => {
  return Font.loadAsync({
    // lato
    'lato-black': require('./assets/fonts/Lato/Lato-Black.ttf'),
    'lato-black-italic': require('./assets/fonts/Lato/Lato-BlackItalic.ttf'),
    'lato-bold': require('./assets/fonts/Lato/Lato-Bold.ttf'),
    'lato-bold-italic': require('./assets/fonts/Lato/Lato-BoldItalic.ttf'),
    'lato-italic': require('./assets/fonts/Lato/Lato-Italic.ttf'),
    'lato-light': require('./assets/fonts/Lato/Lato-Light.ttf'),
    'lato-light-italic': require('./assets/fonts/Lato/Lato-LightItalic.ttf'),
    'lato-regular': require('./assets/fonts/Lato/Lato-Regular.ttf'),
    'lato-thin': require('./assets/fonts/Lato/Lato-Thin.ttf'),
    'lato-thin-italic': require('./assets/fonts/Lato/Lato-ThinItalic.ttf'),
  })
}

function DrawerNav() {
  const authCtx = useContext(AuthContext);
  
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerTransparent: true,
        headerTitle: "",
        headerRight: () => {
          if(!authCtx.isAuthenticated) {
            return <UserIcon onClick={() => navigation.navigate("Login")}><FontAwesome name="user-o" size={24} color="white" /></UserIcon>;
          } else {
            return <UserIcon onClick={() => authCtx.logout()}><Image style={{flex: 1, resizeMode: 'contain'}} source={require('./assets/pakalu.png')} /></UserIcon>;
          }
        },
        headerLeft: () => {
          return <Feather style={{ marginLeft: 25, marginTop: 5}} name="menu" size={30} color="black" onPress={() => {navigation.openDrawer()}} />
        },
        drawerContentStyle: {
          backgroundColor: "#e5f6df",
        },
        overlayColor: "rgba(0,0,0,0.5)",
      })}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={Home} />
      <Drawer.Screen name="Terms" component={Home} />
      <Drawer.Screen name="Privacy" component={Home} />
      <Drawer.Screen name="Disclaimers" component={Home} />
      <Drawer.Screen name="Donate" component={Home} />
      <Drawer.Screen name="Contact" component={Home} />
    </Drawer.Navigator>
  );
}

// unauthenticated stack
function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="DrawerNav" component={DrawerNav} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

// authenticated stack
function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="DrawerNav" component={DrawerNav} />
    </Stack.Navigator>
  );
}

// stack is rendered depending on whether a user is authenticated or not
function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated ? <AuthStack /> : <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded){
    return (
      <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      onError={console.warn} />
    );
  }

  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
}
