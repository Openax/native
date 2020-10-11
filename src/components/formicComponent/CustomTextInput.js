import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Formik, Field, Form } from "formik";
import MaterialButtonWithVioletText from "../MaterialButtonWithVioletText";
import MaterialFixedLabelTextbox from "../MaterialFixedLabelTextbox";
import MaterialButtonWithVioletText1 from "../MaterialButtonWithVioletText1";
import MaterialButtonWithVioletText2 from "../sharedComponents/MaterialButtonWithText";

export function CustomTextInput(props) {
  const styles = StyleSheet.create({
    container: {
      borderBottomWidth: 1,
      borderColor: "#D9D5DC",
      backgroundColor: "transparent",
      flexDirection: "row",
      paddingLeft: 16,
      marginBottom: 5,
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
      fontFamily: "poppins-regular",
      fontSize: 16,
      alignSelf: "stretch",
      flex: 1,
      lineHeight: 26,
      paddingTop: 14,
      paddingBottom: 8,
      paddingLeft: 30,
    },
  });

  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.email}> {props.labelText}</Text>
      <TextInput
        secureTextEntry={props.secure}
        style={styles.inputStyle}
        onChangeText={props.handleChange("email")}
        onBlur={props.handleBlur("email")}
        value={props.value}
      />
    </View>
  );
}
