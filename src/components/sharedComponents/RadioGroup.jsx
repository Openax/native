import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { RadioButton } from "react-native-paper";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
function RadioGroupComp(props) {
  const [value, setValue] = React.useState("first");

  return (
    <RadioButton.Group onValueChange={(value) => setValue(value)} value={value}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 50,
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <FontAwesomeIcon
              name="user"
              style={{
                color: "rgba(36,108,166,1)",
                fontSize: 75,
              }}
            ></FontAwesomeIcon>
            <Text style={{ marginTop: 10 }}>Individual</Text>
          </View>

          <RadioButton value="first" />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <MaterialIconsIcon
              name="business-center"
              style={{
                color: "rgba(49,49,49,1)",
                fontSize: 75,
              }}
            ></MaterialIconsIcon>
            <Text style={{ marginTop: 10 }}>Company</Text>
          </View>

          <RadioButton value="second" />
        </View>
      </View>
    </RadioButton.Group>
  );
}

export default RadioGroupComp;
