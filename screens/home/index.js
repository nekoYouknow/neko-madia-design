import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Slider
} from "react-native";
// import Slider from "@react-native-community/slider";

import BottomMenu from "../../shared/bottomMenu";

const btnImages = {
  smarttv: require("../../assets/home/smart-tv.png"),
  router: require("../../assets/home/router.png"),
  thermostat: require("../../assets/home/thermostat.png"),
  more: require("../../assets/home/more.png")
};

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
        marginBottom: 24
      }}
    >
      {/* left */}
      <View style={{ flexDirection: "column" }}>
        <View>
          <Text style={{ fontSize: 28 }}>Home</Text>
        </View>
        <View>
          <Text>Person who makes designs</Text>
        </View>
      </View>

      {/* Right */}
      <View style={{ justifyContent: "center" }}>
        <Image
          source={require("../../assets/avatar.png")}
          style={{ borderWidth: 1, width: 45, height: 45 }}
          resizeMode="cover"
        />
        <Text
          style={{
            backgroundColor: "#fe1061",
            width: 18,
            height: 18,
            borderRadius: 90,
            color: "white",
            textAlign: "center",
            position: "absolute",
            top: 5,
            left: 30
          }}
        >
          3
        </Text>
      </View>
    </View>
  );
};

const ButtonBox = ({ icon, title, checked }) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 7,
        width: 150,
        height: 120,
        backgroundColor: "white",
        margin: 3,
        padding: 20
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignContent: "space-around"
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            source={icon}
            resizeMode="contain"
            style={{ width: 35, height: 35 }}
          />
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <View
            style={{
              backgroundColor: "#31EB69",
              width: 10,
              height: 10,
              borderRadius: 90,
              marginTop: 10
            }}
            display={checked ? "flex" : "none"}
          ></View>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Temperature = () => {
  const [temp, setTemp] = useState(20); //default 20'C
  return (
    <View style={{ paddingVertical: 20 }}>
      <View
        style={{
          flexDirection: "row"
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 20 }}>Temperature</Text>
          <Text>Who understands deeper</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{ fontSize: 40, textAlign: "right", color: "lightgray" }}
          >
            {temp}'C
          </Text>
        </View>
      </View>

      <Slider
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={temp}
        onValueChange={value => setTemp(value)}
      />
    </View>
  );
};

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Header />

      {/* ButtonBoxs */}
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <ButtonBox
          icon={btnImages["smarttv"]}
          title="Smart TV"
          checked={false}
        />
        <ButtonBox icon={btnImages["router"]} title="Router" checked={true} />
        <ButtonBox
          icon={btnImages["thermostat"]}
          title="Thermostat"
          checked={false}
        />
        <ButtonBox
          icon={btnImages["more"]}
          title="More formally designer"
          checked={false}
        />
      </View>

      <Temperature style={{ flex: 1 }} />
      <BottomMenu {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    marginTop: 24,
    paddingHorizontal: 24
  }
});
