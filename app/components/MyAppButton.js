import React from "react";
import { TouchableOpacity, Text } from "react-native";

function AppButton({ title, onPress, backgroundColor, width, color }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: backgroundColor,
        width: width,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center", //most important
        padding: 8.2,
      }}
    >
      <Text
        style={{
          fontSize: 15,
          color: color,
          textTransform: "uppercase",
        }}
        onPress={onPress}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default AppButton;
