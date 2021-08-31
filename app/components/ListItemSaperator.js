import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

function ListItemSaperator(props) {
  return <View style={styles.saperator}></View>;
}

const styles = StyleSheet.create({
  saperator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});

export default ListItemSaperator;
