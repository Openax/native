import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";

function MaterialButtonWithVioletText1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <TextInput
        placeholder="Forgot password?"
        style={styles.textInput}
      ></TextInput>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  textInput: {
    color: "rgba(0,0,0,1)",
    fontSize: 11,
    fontFamily: "poppins-regular",
    opacity: 0.5,
    textDecorationLine: "underline",

    width: 108,
    height: 18,
  },
});

export default MaterialButtonWithVioletText1;
