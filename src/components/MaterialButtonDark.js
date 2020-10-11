import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonDark(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}></TouchableOpacity>
      <Text style={styles.logIn}>Log In</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  button: {
    top: 0,
    left: 0,
    width: 100,
    height: 36,
    position: "absolute",
    backgroundColor: "rgba(36,108,166,1)",
    borderRadius: 10
  },
  logIn: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "poppins-regular"
  }
});

export default MaterialButtonDark;
