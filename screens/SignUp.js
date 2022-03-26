import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../constants/Colors";
import { createUser } from "../util/auth";
import { AuthContext } from "../store/auth-context";

const SignUp = ({ navigation }) => {
  const authCtx = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPW, setConfirmPW] = useState("");

  const [error, setError] = useState(true);
  const [nameBorder, setNameBorder] = useState("grey");
  const [emailBorder, setEmailBorder] = useState("grey");
  const [passwordBorder, setPasswordBorder] = useState("grey");
  const [confirmPWBorder, setConfirmPWBorder] = useState("grey");

  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirmPW, setViewConfirmPW] = useState(false);

  const [nameIcon, setNameIcon] = useState("");
  const [emailIcon, setEmailIcon] = useState("");
  const [passwordIcon, setPasswordIcon] = useState("");
  const [confirmPWIcon, setConfirmPWIcon] = useState("");

  async function signUpHandler() {
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {}
  }

  async function onClick() {
    setError(false);

    setNameIcon("check-circle");
    setEmailIcon("check-circle");
    setPasswordIcon("check-circle");
    setConfirmPWIcon("check-circle");

    setNameBorder(Colors.primary);
    setEmailBorder(Colors.primary);
    setPasswordBorder(Colors.primary);
    setConfirmPWBorder(Colors.primary);

    if (!name || name.trim().length === 0) {
      setError(true);
      setNameBorder("red");
      setNameIcon("error-outline");
    }

    if (!email.includes("@") && !email.includes(".com")) {
      setError(true);
      setEmailBorder("red");
      setEmailIcon("error-outline");
    }
    if (!password || password.trim().length === 0) {
      setError(true);
      setPasswordBorder("red");
      setPasswordIcon("error-outline");
    }

    if (
      !(password === confirmPW) ||
      !confirmPW ||
      confirmPW.trim().length === 0
    ) {
      setError(true);
      setConfirmPWBorder("red");
      setConfirmPWIcon("error-outline");
    }
  }

  if (!error) {
    signUpHandler();
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ position: "absolute", right: 200 }}>
          <Ionicons
            name="chevron-back-sharp"
            size={50}
            color={Colors.primary}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text style={styles.header}>Sign Up for</Text>
      </View>
      <Text
        style={[
          styles.header,
          {
            marginBottom: 30,
            color: Colors.primary,
            fontFamily: "lato-italic",
          },
        ]}
      >
        Freegle!
      </Text>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>Full Name</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={{ ...styles.inputContainer, borderColor: nameBorder }}>
          <View style={{ flexDirection: "row", width: 250 }}>
            <TextInput
              style={styles.input}
              onChangeText={(newText) => setName(newText)}
            />
            <View style={{ marginRight: 5, top: 15 }}>
              <Ionicons name="person" size={24} color="grey" />
            </View>
          </View>
        </View>
        <View style={{ justifyContent: "center", left: 10 }}>
          <MaterialIcons name={nameIcon} size={24} color={nameBorder} />
        </View>
      </View>

      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>Email</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={{ ...styles.inputContainer, borderColor: emailBorder }}>
          <View style={{ flexDirection: "row", width: 250 }}>
            <TextInput
              //value={email}
              style={styles.input}
              onChangeText={(newText) => setEmail(newText)}
            />
            <View style={{ marginRight: 5, top: 15 }}>
              <MaterialCommunityIcons
                name="email-outline"
                size={24}
                color="grey"
              />
            </View>
          </View>
        </View>
        <View style={{ justifyContent: "center", left: 10 }}>
          <MaterialIcons name={emailIcon} size={24} color={emailBorder} />
        </View>
      </View>

      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>Password</Text>
      </View>

      {viewPassword ? (
        <View style={styles.mainContainer}>
          <View
            style={{ ...styles.inputContainer, borderColor: passwordBorder }}
          >
            <View style={{ flexDirection: "row", width: 250 }}>
              <TextInput
                style={styles.input}
                //value={password}
                onChangeText={(newText) => setPassword(newText)}
              />
              <View style={{ marginRight: 5, top: 15 }}>
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
          </View>
          <View style={{ justifyContent: "center", left: 10 }}>
            <MaterialIcons
              name={passwordIcon}
              size={24}
              color={passwordBorder}
            />
          </View>
        </View>
      ) : (
        <View style={styles.mainContainer}>
          <View
            style={{ ...styles.inputContainer, borderColor: passwordBorder }}
          >
            <View style={{ flexDirection: "row", width: 250 }}>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(newText) => setPassword(newText)}
              />
              <View style={{ marginRight: 5, top: 15 }}>
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
          </View>
          <View style={{ justifyContent: "center", left: 10 }}>
            <MaterialIcons
              name={passwordIcon}
              size={24}
              color={passwordBorder}
            />
          </View>
        </View>
      )}

      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>Confirm Password</Text>
      </View>
      {viewConfirmPW ? (
        <View style={styles.mainContainer}>
          <View
            style={{ ...styles.inputContainer, borderColor: confirmPWBorder }}
          >
            <View style={{ flexDirection: "row", width: 250 }}>
              <TextInput
                style={styles.input}
                onChangeText={(newText) => setConfirmPW(newText)}
              />
              <View style={{ marginRight: 5, top: 15 }}>
                <Feather
                  name="eye"
                  size={24}
                  color="grey"
                  onPress={() => {
                    setViewConfirmPW(false);
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{ justifyContent: "center", left: 10 }}>
            <MaterialIcons
              name={confirmPWIcon}
              size={24}
              color={confirmPWBorder}
            />
          </View>
        </View>
      ) : (
        <View style={styles.mainContainer}>
          <View
            style={{ ...styles.inputContainer, borderColor: confirmPWBorder }}
          >
            <View style={{ flexDirection: "row", width: 250 }}>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(newText) => setConfirmPW(newText)}
              />
              <View style={{ marginRight: 5, top: 15 }}>
                <Feather
                  name="eye-off"
                  size={24}
                  color="grey"
                  onPress={() => {
                    setViewConfirmPW(true);
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{ justifyContent: "center", left: 10 }}>
            <MaterialIcons
              name={confirmPWIcon}
              size={24}
              color={confirmPWBorder}
            />
          </View>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          color={Colors.primary}
          onPress={() => onClick()}
        >
          <Text style={styles.signUpText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{ width: 80, height: 1, backgroundColor: Colors.primary }}
        />
        <View>
          <Text style={{ margin: 10,
              width: 150,
              textAlign: "center",
              fontFamily: "lato-light",
              fontSize: 18, }}>
            already have an account?
          </Text>
        </View>
        <View
          style={{ width: 80, height: 1, backgroundColor: Colors.primary }}
        />
      </View>
      <View style={styles.signInContainer}>
        <Text
          style={styles.signInText}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Sign In!
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
    fontFamily: "lato-regular",
  },
  labelContainer: {
    alignSelf: "flex-start",
    left: 90,
  },
  labelText: {
    fontSize: 15,
    fontFamily: "lato-regular",
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
    right: 0,
    height: 40,
    margin: 10,
    width: "80%",
    fontFamily: 'lato-regular'
  },
  buttonContainer: {
    paddingTop: 25,
    paddingBottom: 25,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: Colors.primary,
    width: 135,
    height: 40,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
  },
  signUpText: {
    fontSize: 20,
    color: "white",
    fontFamily: "lato-regular",
  },
  signInContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  signInText: {
    color: Colors.primary,
    fontSize: 20,
    fontFamily: "lato-bold-italic",
    margin: 5,
  },
  mainContainer: {
    flexDirection: "row",
  },
});

export default SignUp;
