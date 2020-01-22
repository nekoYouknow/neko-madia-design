import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const menuImages = {
  menu1: require("../assets/menu/menu-1.png"),
  menu2: require("../assets/menu/menu-2.png"),
  menu3: require("../assets/menu/menu-3.png")
};
export default function BottomMenu({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical: 30
      }}
    >
      {/* Home */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{
          backgroundColor: "#ececec",
          borderRadius: 30,
          width: 65,
          height: 40,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Admin")}>
        <Image
          source={menuImages["menu1"]}
          resizeMode="contain"
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Admin")}>
        <Image
          source={menuImages["menu2"]}
          resizeMode="contain"
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Admin")}>
        <Image
          source={menuImages["menu3"]}
          resizeMode="contain"
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
    </View>
  );
}
