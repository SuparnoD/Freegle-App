import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { AuthContext } from "../store/auth-context";
import { Colors } from "../constants/Colors";
import { login } from "../util/auth";

const Login = ({ navigation }) => {
  const authCtx = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [viewPassword, setViewPassword] = useState(false);

  async function onClick() {
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      alert("Incorrect Credentials")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log In to</Text> 
      <Text style={[styles.header, {marginBottom: 30, color: Colors.primary, fontFamily: 'lato-italic'}]}>FREEGLE!</Text>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>Email</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(newText) => setEmail(newText)}
        />
        <View style={{ marginRight: 5 }}>
          <MaterialCommunityIcons name="email-outline" size={24} color="grey" />
        </View>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>Password</Text>
      </View>
      {viewPassword ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(newText) => setPassword(newText)}
          />
          <View style={{ marginRight: 5 }}>
            <Feather
              name="eye"
              size={24}
              color="grey"
              onPress={() => {
                setViewPassword(false);
              }}
            />
          </View>
        </View>
      ) : (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(newText) => setPassword(newText)}
          />
          <View style={{ marginRight: 5 }}>
            <Feather
              name="eye-off"
              size={24}
              color="grey"
              onPress={() => {
                setViewPassword(true);
              }}
            />
          </View>
        </View>
      )}
      <View style={styles.resetContainer}>
        <Text
          style={styles.resetText}
          onPress={() => {}}
        >
          Forgot Password?
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          color={Colors.primary}
          onPress={() => {
            onClick();
          }}
        >
          <Text style={styles.loginText}>LOG IN</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{ width: 80, height: 1, backgroundColor: Colors.primary }}
        />
        <View>
          <Text style={{ margin: 10, width: 150, textAlign: "center", fontFamily: 'lato-light', fontSize: 18 }}>
            or sign in with
          </Text>
        </View>
        <View
          style={{ width: 80, height: 1, backgroundColor: Colors.primary }}
        />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconBG}>
          <FontAwesome name="facebook" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBG}>
          <AntDesign name="google" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBG}>
          <MaterialCommunityIcons name="yahoo" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBG}>
          <AntDesign name="apple1" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.registerContainer}>
        <Text style={{fontSize: 18, fontFamily: 'lato-light'}}>Don't have an account?</Text>
        <Text
          style={styles.registerText}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          Sign Up!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    fontFamily: 'lato-regular'
  },
  labelContainer: {
    alignSelf: "flex-start",
    left: 90,
  },
  labelText: {
    fontSize: 15,
    fontFamily: 'lato-regular',
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "grey",
    height: 40,
    borderRadius: 15,
    margin: 10,
  },
  input: {
    height: 40,
    margin: 10,
    width: "50%",
  },
  resetContainer: {
    alignSelf: "flex-end",
    right: 90,
  },
  resetText: {
    fontSize: 14,
    fontFamily: 'lato-italic'
  },
  buttonContainer: {
    paddingTop: 50,
    paddingBottom: 25,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
    width: 250,
    height: 50,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
    margin: 12,
  },
  loginText: {
    fontSize: 20,
    color: "white",
    fontFamily: 'lato-regular'
  },
  iconContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    width: 275,
  },
  iconBG: {
    backgroundColor: Colors.primary,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  registerContainer: {
    alignItems: "center",
    justifyContent: "center",
    top: 30,
  },
  registerText: {
    color: Colors.primary,
    fontSize: 20,
    fontFamily: 'lato-bold-italic',
    margin: 5,
  },
});

export default Login;
