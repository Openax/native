import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithVioletText7(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.sendTheSmsAgain}>Send the SMS again</Text>
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
  sendTheSmsAgain: {
    color: "rgba(49,49,49,1)",
    fontSize: 14,
    fontFamily: "poppins-regular",
    textDecorationLine: "underline",
    opacity: 0.5
  }
});

export default MaterialButtonWithVioletText7;
