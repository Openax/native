import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function MaterialFixedLabelTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.email}>Email</Text>
      <TextInput
        placeholder=""
        value={props.value}
        style={styles.inputStyle}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    paddingLeft: 16,
  },
  email: {
    //fontFamily: "poppins-regular",
    fontSize: 16,
    lineHeight: 16,
    paddingTop: 16,
    paddingBottom: 8,
    color: "#000",
    opacity: 0.5,
    alignSelf: "flex-start",
  },
  inputStyle: {
    color: "rgba(49,49,49,1)",
    paddingRight: 5,
    // fontFamily: "poppins-regular",
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 14,
    paddingBottom: 8,
    paddingLeft: 30,
  },
});

export default MaterialFixedLabelTextbox;
