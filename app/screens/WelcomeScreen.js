import React from "react";
import { Image, View, Text, ImageBackground, StyleSheet } from "react-native";

//config
import colors from "../config/colors";

//components
import MyAppButton from "../components/MyAppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={8}
      source={require("../assets/background.jpg")}
      style={styles.backgroungImage}
    >
      <Image
        source={require("../assets/logo-red.png")}
        style={styles.logo}
      ></Image>
      <Text style={styles.logoText}> Sell What You Don't Need</Text>

      <View style={styles.firstButton}>
        <MyAppButton
          backgroundColor={colors.primary}
          color={colors.white}
          width="70%"
          title="log in"
          onPress={() => console.log("1st Clicked")}
        />
      </View>
      <View style={styles.secondButton}>
        <MyAppButton
          backgroundColor={colors.secondary}
          color={colors.white}
          width="70%"
          title="Register"
          onPress={() => console.log("2nd Clicked")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroungImage: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },
  logo: {
    width: 90,
    height: 110,
    alignSelf: "center",
    top: 70,
    position: "absolute",
  },
  logoText: {
    alignSelf: "center",
    top: 190,
    fontSize: 20,
    position: "absolute",
  },
  firstButton: {
    bottom: 40,
  },
  secondButton: {
    // backgroundColor: colors.secondary,
    // width: "100%",
    // height: 60,
    bottom: 25,
  },
});
