import React from "react";
import { Image, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export default function ViewImageScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={styles.cancelIcon}>
        <AntDesign name="delete" size={20} color={colors.white} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialIcons name="cancel" size={20} color={colors.white} />
      </View>

      <Image
        source={require("../assets/chair.jpg")}
        style={{ width: " 100%", height: 450, alignSelf: "center", top: 80 }}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  cancelIcon: {
    alignSelf: "flex-end",
    top: 48,
    right: 12,
  },
  deleteIcon: {
    top: 20,
    left: 12,
  },
});
