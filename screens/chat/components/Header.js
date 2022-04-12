import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../../constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.icons}>
                <MaterialCommunityIcons name='refresh' size={22} color='white' />
                <MaterialCommunityIcons name='bell' size={22} color='white' />
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
        backgroundColor: Colors.primary,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 15,
    },
    icons: {
        flexDirection: 'row',
        marginRight: 20,
        justifyContent: 'space-between',
        width: 110,
    },
});

export default Header;