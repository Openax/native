import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function SmallFlatButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View
        style={[
          styles.rect,
          {
            backgroundColor: props.rect || undefined
          }
        ]}
      >
        <Text style={styles.button}>{props.button || "Button"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 125,
    height: 36
  },
  button: {
    fontFamily: "poppins-600",
    color: "#121212",
    textAlign: "center",
    marginTop: 7,
    marginLeft: 38
  }
});

export default SmallFlatButton;
