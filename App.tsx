import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import AuthContextProvider from "./store/auth-context";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
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
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
  );
}

function Navigation() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </AuthContextProvider>
  );
}

export default function App() {
  return <Navigation />;
}
