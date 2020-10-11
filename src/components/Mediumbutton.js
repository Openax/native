import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function Mediumbutton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={props.onPress}
        style={props.styleBtn || styles.button}
      >
        <Text style={props.styleText || styles.text}>
          {props.text || props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 148,
    height: 36,
    backgroundColor: "rgba(36,108,166,1)",
    borderRadius: 10,
  },
  text: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 7,
    marginLeft: 54,
  },
});

export default Mediumbutton;
