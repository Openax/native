import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Asset } from "expo-asset";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Svg, { Ellipse } from "react-native-svg";
import Navigation from "../components/Navigation";
import BigButtonIcon from "../components/BigButtonIcon";
import FlatIconButton from "../components/FlatIconButton";
import FormicWrapperComponent from "../components/formicComponent/FormicWrapper";

function Account({ navigation }) {
  console.log("navig", navigation);
  return (
    <View style={styles.container}>
      <FormicWrapperComponent navigation={navigation}></FormicWrapperComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  text: {
    fontFamily: "poppins-600",
    color: "rgba(36,108,166,1)",
    fontSize: 22,
    marginTop: 60,
    marginLeft: 20,
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    marginTop: 50,
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 140,
    height: 140,
    position: "absolute",
  },
  image: {
    top: 10,
    width: 120,
    height: 120,
    position: "absolute",
    borderRadius: 100,
    left: 11,
  },
  ellipseStack: {
    width: 140,
    height: 140,
    marginLeft: 37,
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    marginLeft: 36,
    marginTop: 50,
  },
  icon2Row: {
    height: 140,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 50,
    marginRight: 52,
  },
  steveRogers: {
    fontFamily: "poppins-600",
    color: "rgba(49,49,49,1)",
    fontSize: 19,
  },
  sRogersGmailCom: {
    fontFamily: "poppins-600",
    color: "rgba(49,49,49,1)",
    fontSize: 16,
    marginLeft: 36,
  },
  steveRogersRow: {
    height: 29,
    flexDirection: "row",
    marginTop: 27,
    marginLeft: 20,
    marginRight: 24,
  },
  sRogersGmailCom2: {
    fontFamily: "poppins-600",
    color: "rgba(49,49,49,1)",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 181,
  },
  navigation: {
    width: 375,
    height: 83,
    marginTop: 377,
  },
  bigButtonIcon2: {
    width: 161,
    height: 170,
  },
  bigButtonIcon3: {
    width: 161,
    height: 170,
    marginLeft: 12,
  },
  bigButtonIcon2Row: {
    height: 170,
    flexDirection: "row",
    marginTop: -427,
    marginLeft: 20,
    marginRight: 21,
  },
  flatIconButton: {
    height: 43,
    width: 128,
    marginTop: 118,
    marginLeft: 247,
  },
});

export default Account;
