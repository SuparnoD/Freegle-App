import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons'

import { Colors } from '../../../constants/Colors';

const SearchBar = props => {
    return (
        <View style={styles.navBar}>
            <TextInput style={styles.input} placeholder='Search...' />
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
        backgroundColor: Colors.primary,
        borderBottomColor: 'white',
        paddingBottom: 10,
    },
    input: {
        height: 35,
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 15,
        paddingLeft: 10,
    },
});

export default SearchBar;