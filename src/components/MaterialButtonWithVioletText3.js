import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithVioletText3(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.signUp}>Sign Up</Text>
      <TouchableOpacity
        onPress={() => console.log("Navigate to WizardSignUp")}
        style={styles.button}
      ></TouchableOpacity>
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
  signUp: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontFamily: "poppins-regular",
    opacity: 0.5,
  },
  button: {
    top: 0,
    left: 0,
    width: 100,
    height: 36,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)",
  },
});

export default MaterialButtonWithVioletText3;
