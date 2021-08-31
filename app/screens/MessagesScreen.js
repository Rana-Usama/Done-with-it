import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Icon from "../components/Icon";

import ListItem from "../components/ListItem";
import ListItemSaperator from "../components/ListItemSaperator";
import Screen from "../components/Screen";
import ListItemDeleteAction from "./../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 0,
    title: "T1",
    discription: "D1",
    image: require("../assets/usama.jpg"),
  },
  {
    id: 1,
    title: "T2",
    discription: "D2",
    image: require("../assets/usama.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.discription}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSaperator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "T2",
              discription: "D2",
              image: require("../assets/usama.jpg"),
            },
          ]);
        }}
      />
      <Icon
        name="email"
        size={50}
        backgroundColor="dodgerblue"
        iconColor="black"
      ></Icon>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
