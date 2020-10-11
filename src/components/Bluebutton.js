import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function Bluebutton(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <TouchableOpacity /* Conditional navigation not supported at the moment */
        onPress={() => console.log("Navigate to LogIn")}
        style={styles.button4}
      >
        <Text style={styles.button3}>{props.button3 || "Button"}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  button4: {
    width: 334,
    height: 36,
    backgroundColor: "rgba(36,108,166,1)",
    borderRadius: 10
  },
  button3: {
    fontFamily: "poppins-600",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    textAlign: "center",
    marginTop: 9,
    marginLeft: 144
  }
});

export default Bluebutton;
