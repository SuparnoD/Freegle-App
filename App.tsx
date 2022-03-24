import "react-native-gesture-handler";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import UserIcon from "./components/UserIcon";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import { Feather } from '@expo/vector-icons';
import { Colors } from "./constants/Colors";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerTransparent: true,
        headerTitle: "",
        headerRight: () => {
          return <UserIcon onClick={() => navigation.navigate("Login")} />;
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
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
}
