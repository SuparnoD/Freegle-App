import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';

import ChatListItem from './ChatListItem';
import chatRooms from '../data/ChatRooms'

const ChatList = () => {
    return (
        <View style={{ height: '100%' }}>
            <View style={styles.container}>
                <FlatList
                    data={chatRooms}
                    renderItem={({ item }) => <ChatListItem chatRoom={item} />}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ paddingBottom: 50 }}
                    style={{width: '100%'}}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '70%'
    },
});

export default ChatList;