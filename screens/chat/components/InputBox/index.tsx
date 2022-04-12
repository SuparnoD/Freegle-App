import React, {useState} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Colors } from '../../../../constants/Colors';

const InputBox = () => {
    const [message, setMessage] = useState('');
    
    // insert API for sending message
    const onClickSend = () => {
        alert(`You sent: ${message}`)
    };

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <TextInput style={styles.textInput} 
                placeholder="Type a message..."
                multiline 
                value={message}
                onChangeText={setMessage} />
                <View style={styles.buttonContainer}>
                <MaterialCommunityIcons name="handshake" size={24} color="grey" />
                <MaterialCommunityIcons name="book" size={24} color="grey" />
                <MaterialCommunityIcons name="bell" size={24} color="grey" />
                <MaterialCommunityIcons name="camera" size={24} color="grey" />
                {message ? <MaterialCommunityIcons name="send" size={24} color={Colors.primary} onPress={onClickSend} /> : null}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.chatRoomBackground,
        margin: 10,
    },
    mainContainer: {
        backgroundColor: 'white',
        padding: 10,
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',  
    },
    textInput: {
        marginBottom: 10,
        marginHorizontal: 10,
    },
});

export default InputBox;