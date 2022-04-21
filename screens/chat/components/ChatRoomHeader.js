import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../../constants/Colors';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

const ChatRoomHeader = (props, { navigation }) => {
    return (
        <View style={styles.header}>
            <Ionicons name="arrow-back-outline" size={24} color="white" onPress={props.backNavigate}/>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.icons}>
                <MaterialCommunityIcons name='dots-vertical' size={22} color='white' />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 100,
        paddingTop: 55,
        paddingHorizontal: 20,
        backgroundColor: Colors.primary,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        right: "220%"
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 20,
    },
});

export default ChatRoomHeader;