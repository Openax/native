import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithVioletText6(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.signUp}>Sign Up</Text>
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
    paddingRight: 16
  },
  signUp: {
    color: "rgba(36,108,166,1)",
    fontSize: 22,
    fontFamily: "poppins-600"
  }
});

export default MaterialButtonWithVioletText6;
