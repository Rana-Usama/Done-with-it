import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

//config
import colors from "../config/colors";

export default function Card({ title, subTitle, imgSource }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <Image
          fadeDuration={1000}
          style={styles.CardImage}
          source={imgSource}
        ></Image>
        <Text style={styles.mainHeading}>{title}</Text>
        <Text style={styles.subHeading}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#f8f4f4",
    flex: 1,
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 5,
  },
  cardContainer: {
    backgroundColor: colors.white,
    width: "88%",
    height: 280,
    borderRadius: 20,
    overflow: "hidden", //for border radius of material or image above card
  },
  mainHeading: {
    fontSize: 17,
    top: 15,
    left: 10,
  },
  subHeading: {
    fontSize: 17,
    top: 20,
    left: 10,
    color: colors.secondary,
    fontWeight: "bold",
  },
  CardImage: {
    width: "100%",
    height: 200,
  },
});
