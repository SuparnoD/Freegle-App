import React from "react";
import { View, Text, StyleSheet } from 'react-native';

import { Message } from "../../types";
import { Colors } from "../../../../constants/Colors";

export type ChatMessageProps = {
    message: Message;
}

// u1 is the message of current user, replace with appropriate API
const ChatMessage = (props: ChatMessageProps) => {
    const { message } = props
    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

    return (
        <View style={styles.container}>
            <View style={[styles.messageBox, 
                {backgroundColor: isMyMessage() ? '#DCF8C5' : 'white', 
                marginLeft: isMyMessage() ? 50 : 0,
                marginRight: isMyMessage() ? 0 : 50,
                }]}>
                {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.time}>{message.createdAt}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    messageBox: {
        padding: 10,
        borderRadius: 10,
    },
    name: {
        marginBottom: 5,
        color: Colors.primary,
        fontWeight: 'bold',
    },
    message: {
        marginBottom: 2,
    },
    time: {
        fontSize: 10,
        alignSelf: 'flex-end',
        color: 'grey',
    },
});

export default ChatMessage;