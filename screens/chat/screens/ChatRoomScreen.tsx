import React from "react";
import {
  Text,
  FlatList,
  View,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import chatRoomData from "../data/Chats";
import ChatMessage from "../components/ChatMessage";
import InputBox from "../components/InputBox";
import { Colors } from "../../../constants/Colors";
import ChatRoomHeader from "../components/ChatRoomHeader";

const ChatRoomScreen = () => {
  const route = useRoute();
  console.log(route.params);
  return (
      <View style={{backgroundColor: Colors.chatRoomBackground, width: '100%', height: '100%'}}>
          <FlatList style={{ backgroundColor: Colors.chatRoomBackground}}
              data={chatRoomData.messages}
              renderItem={({ item }) => <ChatMessage message={item} />}
              inverted
          />
          <InputBox />
      </View>
  );
};

export default ChatRoomScreen;
