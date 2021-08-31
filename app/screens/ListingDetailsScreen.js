import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

//components
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/jacket.jpg")} />
        <Text style={styles.mainHeading}>Red jacket for sale</Text>
        <Text style={styles.subHeading}>$ 100</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/usama.jpg")}
            title="Rana Usama"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </>
  );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  image: {
    width: "100%",
    height: 250,
  },
  mainHeading: {
    fontSize: 19,
    left: 15,
    top: 15,
    fontWeight: "bold",
  },
  subHeading: {
    fontSize: 20,
    left: 15,
    top: 22,
    fontWeight: "bold",
    color: colors.secondary,
  },
  userContainer: {
    marginVertical: 60,
    marginLeft: 12,
  },
});
