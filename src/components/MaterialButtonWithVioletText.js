import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithVioletText(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, props.style]}
    >
      <Text style={styles.faceId}>{props.text}</Text>
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
  faceId: {
    color: "rgba(36,108,166,1)",
    fontSize: 14,
    //fontFamily: "poppins-regular",
  },
});

export default MaterialButtonWithVioletText;
