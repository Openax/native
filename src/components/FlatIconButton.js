import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function FlatIconButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.icon6Row}>
          <Icon name="phone" style={styles.icon6}></Icon>
          <Text style={styles.contact}>Contact</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 128,
    height: 43,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  icon6: {
    color: "rgba(36,108,166,0.8)",
    fontSize: 30,
    height: 30,
    width: 24
  },
  contact: {
    fontFamily: "poppins-regular",
    color: "rgba(36,108,166,1)",
    textDecorationLine: "underline",
    opacity: 0.8,
    marginLeft: 13,
    marginTop: 3
  },
  icon6Row: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 34,
    marginLeft: 14,
    marginTop: 7
  }
});

export default FlatIconButton;
