import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { Octicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Colors } from '../../constants/Colors';
import Header from './components/Header';
import MainNavigationBar from './components/MainNavigationBar';
import ChatList from './screens/ChatList';
import SearchBar from './components/SearchBar';

const Index = ({ navigation }) => {
  const [chatScreen, setChatScreen] = useState(true);
  return (
    <View>
      <Header title="Freegle Chat" />
      {
        chatScreen ? (
          <View style={styles.navContainer} >
            <MainNavigationBar onPress={() => {navigation.navigate("Home")}}><Entypo name="home" size={16} color="white" /> HOME</MainNavigationBar>
            <MainNavigationBar onPress={() => { setChatScreen(false) }}><Octicons name='search' size={16} color='white' />  SEARCH</MainNavigationBar>
          </View>
        ) : <SearchBar>
          <TouchableOpacity activeOpacity={0.6}>
            <MaterialCommunityIcons name='backspace-outline' size={26} color='white' onPress={() => { setChatScreen(true) }} />
          </TouchableOpacity>
        </SearchBar>
      }
      <ChatList />
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
  navContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: Colors.primary,
  },
  iconPlaceholder: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

export default Index;
