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
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.params);
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            backgroundColor: Colors.chatRoomBackground,
            width: "100%",
            height: "100%",
            flex: 1,
          }}
        >
          <ChatRoomHeader
            title={route.params.name}
            backNavigate={() => {
              navigation.navigate("Chat");
            }}
          />
          <ScrollView contentContainerStyle={{ top: "0%", height: "100%" }}>
            <FlatList
              style={{ backgroundColor: Colors.chatRoomBackground }}
              data={chatRoomData.messages}
              renderItem={({ item }) => <ChatMessage message={item} />}
            />
          </ScrollView>
          <InputBox />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ChatRoomScreen;
