import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function InvertedHalfButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.request}>Request</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 163,
    height: 36,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(36,108,166,1)"
  },
  request: {
    fontFamily: "poppins-500",
    color: "rgba(36,108,166,1)",
    marginTop: 7,
    marginLeft: 52
  }
});

export default InvertedHalfButton;
