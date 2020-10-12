import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialUnderlineTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        maxLength={1}
        placeholder={props.inputStyle || "   "}
        style={styles.inputStyle}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "rgba(36,108,166,1)",
    // backgroundColor: ",1,0.97,0)",
    borderStyle: "solid",
    borderWidth: 0,
    borderBottomWidth: 0,
  },
  inputStyle: {
    color: "#000",
    //  fontFamily: "poppins-regular",
    fontSize: 32,
    flex: 1,
    lineHeight: 16,
    height: 42,
    width: 58,
    borderWidth: 0,
    borderColor: "rgba(36,108,166,1)",
    borderBottomWidth: 3,
  },
});

export default MaterialUnderlineTextbox;
