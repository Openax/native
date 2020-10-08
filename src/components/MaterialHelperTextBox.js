import { StyleSheet, View, Text, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import SyncStorage from "sync-storage";

function MaterialHelperTextBox(props) {
  const [inputA, setInputA] = useState("Login");

  let onChangeTextFuncA = (text) => {
    console.log("TEXT_CHANGED_A", text);
    setInputA(text);
    SyncStorage.set("fooA", text);
  };

  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.label}>{props.label || "StackedLabel"}</Text>
      <TextInput
        onChangeText={(text) => onChangeTextFuncA(text)}
        placeholder={props.inputStyle || "Input"}
        style={styles.inputStyle}
      ></TextInput>
      <Text style={styles.helper}>Helper text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
  label: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16,
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    lineHeight: 16,
    paddingTop: 8,
    flex: 1,
    paddingBottom: 8,
    width: 375,
  },
  helper: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 8,
  },
});

export default MaterialHelperTextBox;
