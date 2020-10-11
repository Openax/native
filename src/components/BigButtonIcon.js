import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function BigButtonIcon(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect2}>
        <Icon name={props.icon3 || "security-lock"} style={styles.icon3}></Icon>
        <Text style={styles.security}>{props.security || "Security"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  rect2: {
    width: 161,
    height: 170,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
  },
  icon3: {
    color: "rgba(36,108,166,1)",
    fontSize: 60,
    height: 66,
    width: 60,
    marginTop: 28,
    marginLeft: 50,
  },
  security: {
    fontFamily: "poppins-600",
    color: "rgba(49,49,49,1)",
    textAlign: "center",
    marginTop: 29,
    marginLeft: 50,
  },
});

export default BigButtonIcon;
