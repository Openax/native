import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithVioletText2(props) {
  let clickHandler = () => {};

  return (
    <TouchableOpacity
      onPress={props.clickHandler}
      style={[styles.container, props.style]}
    >
      <Text style={[styles.logIn, props.textStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    minWidth: 108,
    paddingLeft: 16,
    paddingRight: 16,
  },
  logIn: {
    color: "rgba(36,108,166,1)",
    fontSize: 22,
    fontFamily: "poppins-600",
  },
});

export default MaterialButtonWithVioletText2;
