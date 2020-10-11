import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import MaterialFixedLabelTextbox from "../components/MaterialFixedLabelTextbox";
import MaterialFixedLabelTextbox1 from "../components/MaterialFixedLabelTextbox1";
import MaterialButtonWithVioletText1 from "../components/MaterialButtonWithVioletText1";
import Mediumbutton from "../components/Mediumbutton";
import MaterialButtonWithVioletText from "../components/MaterialButtonWithVioletText";
import MaterialButtonWithVioletText2 from "../components/sharedComponents/MaterialButtonWithText";
import MaterialButtonWithVioletText3 from "../components/MaterialButtonWithVioletText3";

function LogIn({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.groupStack}>
        <View style={styles.group}>
          <MaterialFixedLabelTextbox
            style={styles.email}
          ></MaterialFixedLabelTextbox>
          <MaterialFixedLabelTextbox1
            style={styles.password}
          ></MaterialFixedLabelTextbox1>
          <MaterialButtonWithVioletText1
            style={styles.forgotpasswordbutton}
          ></MaterialButtonWithVioletText1>
          <Mediumbutton style={styles.mediumbutton}></Mediumbutton>
        </View>
        <MaterialButtonWithVioletText
          style={styles.faceIDButton}
        ></MaterialButtonWithVioletText>
      </View>
      <View style={styles.logintopbuttonRow}>
        <MaterialButtonWithVioletText2
          style={styles.logintopbutton}
        ></MaterialButtonWithVioletText2>
        <MaterialButtonWithVioletText3
          style={styles.signUpbutton}
        ></MaterialButtonWithVioletText3>
      </View>
      {/* <Image
        source={require("../assets/fonts")}
        resizeMode="contain"
        style={styles.logo}
      ></Image> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  group: {
    top: 0,
    left: 0,
    width: 335,
    height: 276,
    position: "absolute",
  },
  email: {
    height: 43,
    width: 335,
  },
  password: {
    height: 43,
    width: 335,
    marginTop: 24,
  },
  forgotpasswordbutton: {
    height: 36,
    width: 100,
    marginLeft: 235,
  },
  mediumbutton: {
    height: 36,
    width: 148,
    marginTop: 94,
    marginLeft: 168,
  },
  faceIDButton: {
    height: 36,
    width: 148,
    position: "absolute",
    left: 20,
    top: 245,
  },
  groupStack: {
    width: 335,
    height: 281,
    marginTop: 333,
    marginLeft: 20,
  },
  logintopbutton: {
    height: 36,
    width: 100,
  },
  signUpbutton: {
    height: 36,
    width: 100,
  },
  logintopbuttonRow: {
    height: 36,
    flexDirection: "row",
    marginTop: -395,
    marginLeft: 4,
    marginRight: 171,
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: -236,
    marginLeft: 88,
  },
});

export default LogIn;
