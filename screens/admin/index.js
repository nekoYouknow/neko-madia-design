import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import BottomMenu from "../../shared/bottomMenu";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={{ color: "white", fontSize: 22 }}>Admin Pannel</Text>
      <Text style={{ color: "#bacafe" }}>Person who makes designs</Text>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#4557f8",
          height: 50,
          marginTop: 30,
          borderRadius: 30,
          padding: 10
        }}
      >
        <Image
          source={require("../../assets/avatar.png")}
          style={{ width: 30, height: 30 }}
        />
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text style={{ color: "white" }}>Madia</Text>
          <Text style={{ color: "#bacafe" }}>Properties of a design</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            borderRadius: 30,
            padding: 5,
            width: 75
          }}
        >
          <Image
            source={require("../../assets/admin/medal.png")}
            style={{ width: 20, height: 20, borderRadius: 90 }}
          />
          <Text style={{ textAlign: "center" }}>form</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const List = () => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Madia",
      descript: "Properties of a design",
      icon: require("../../assets/admin/member-1.png")
    },
    {
      id: 2,
      name: "Designer",
      descript: "Properties of a design",
      icon: require("../../assets/admin/member-2.png")
    },
    {
      id: 3,
      name: "Good",
      descript: "Properties of a design",
      icon: require("../../assets/admin/member-3.png")
    },
    {
      id: 4,
      name: "Vegi Cute",
      descript: "More formally",
      icon: require("../../assets/admin/member-4.png")
    }
  ]);

  return (
    <View style={styles.list}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>Member List</Text>
      <ScrollView>
        {members.map(item => (
          <TouchableOpacity
            key={item.id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 7
            }}
          >
            <Image source={item.icon} style={{ width: 40, height: 40 }} />
            <View style={{ flex: 1, paddingLeft: 10 }}>
              <Text>{item.name}</Text>
              <Text style={{ color: "lightgray" }}>{item.descript}</Text>
            </View>
            <View
              style={{
                flexDirection: "row"
              }}
            >
              <Image
                source={require("../../assets/admin/check.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text style={{ paddingHorizontal: 5 }}>form</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 7
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 90,
            backgroundColor: "white",
            width: 40,
            height: 40
          }}
        >
          <Text>+</Text>
        </View>
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text>Add Member</Text>
          <Text style={{ color: "lightgray" }}>Who creates tangible</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default function Admin(props) {
  return (
    <View style={styles.container}>
      <Header />
      <List />

      {/* bottomMenu */}
      <BottomMenu {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    marginTop: 24
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 24,
    height: 180,
    backgroundColor: "#487FFF"
  },
  list: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    backgroundColor: "#f5f5f5"
  }
});
