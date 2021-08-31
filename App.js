import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TextInput, Switch } from "react-native";

//components
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import colors from "./app/config/colors";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import Icon from "./app/components/Icon";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState();

  return (
    <>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <Card
        title="Red jacket for sale!"
        subTitle="$ 100"
        imgSource={require("./app/assets/jacket.jpg")}
      ></Card>
      <Card
        title="Couch in great condition"
        subTitle="$ 900"
        imgSource={require("./app/assets/couch.jpg")}
      ></Card> */}
      {/* <ListingDetailsScreen /> */}
      {/* <MessagesScreen /> */}
      {/* <AccountScreen /> */}
      {/* <ListingsScreen></ListingsScreen> */}
      <Screen>
        <AppPicker
          selectedItem={category}
          onSelectedItem={(item) => setCategory(item)}
          items={categories}
          placeholder="Category"
          icon="apps"
        ></AppPicker>
        <AppTextInput icon="email" placeholder="Email" />
      </Screen>
    </>
  );
}
