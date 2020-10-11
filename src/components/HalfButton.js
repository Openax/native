import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function HalfButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.transfer}>Transfer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 163,
    height: 36,
    backgroundColor: "rgba(36,108,166,1)",
    borderRadius: 10
  },
  transfer: {
    fontFamily: "poppins-500",
    color: "rgba(255,255,255,1)",
    marginTop: 7,
    marginLeft: 52
  }
});

export default HalfButton;
