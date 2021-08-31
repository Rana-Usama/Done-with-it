import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import ListItemSaperator from "./ListItemSaperator";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
      <ListItemSaperator></ListItemSaperator>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: colors.light,
  },
});

export default PickerItem;
