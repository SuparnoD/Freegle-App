import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { Colors } from '../constants/Colors';

const SignUp = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sign Up for{"\n"} Freegle!</Text>
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>Full Name</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>Username</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>Email</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>Password</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} secureTextEntry={true} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} color={Colors.primary} onPress={() => { }}>
                    <Text style={styles.signUpText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ width: 100, height: 1, backgroundColor: Colors.primary }} />
                <View>
                    <Text style={{ margin: 10, width: 100, textAlign: 'center' }}>already have an account?</Text>
                </View>
                <View style={{ width: 100, height: 1, backgroundColor: Colors.primary }} />
            </View>
            <View style={styles.signInContainer}>
                <Text style={styles.signInText} onPress={() => {navigation.navigate('Login')}}>Sign In!</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 30,
        padding: 25,
      },
      labelContainer: {
        alignSelf: 'flex-start',
        left: 90,
      },
      labelText: {
        fontSize: 15,
      },
      inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1.5,
        borderColor: Colors.primary,
        height: 40,
        borderRadius: 15,
        margin: 10,
      },
      input: {
        height: 40,
        margin: 10,
        width: '50%',
      },
      buttonContainer: {
        paddingTop: 25,
        paddingBottom: 25,
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: Colors.primary,
        width: 135,
        height: 40,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 5,
      },
      signUpText: {
        fontSize: 20,
        color: 'white',
      },
      signInContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      signInText: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: Colors.primary,
        fontSize: 20,
      },
});

export default SignUp;