import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Navigation from "../components/Navigation";
import BigButtonIcon from "../components/BigButtonIcon";
import FlatIconButton from "../components/FlatIconButton";

function AccountPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account</Text>
      <View style={styles.icon2Row}>
        <EntypoIcon name="camera" style={styles.icon2}></EntypoIcon>
        <View style={styles.ellipseStack}>
          <Image
            source={require("../assets/images/H1.jpg")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
        <EntypoIcon name="edit" style={styles.icon}></EntypoIcon>
      </View>
      <View style={styles.steveRogersRow}>
        <Text style={styles.steveRogers}>Steve Rogers</Text>
        <Text style={styles.sRogersGmailCom}>s.rogers@gmail.com</Text>
      </View>
      <View style={styles.image2Row}>
        {/* <Image
          source={require("../assets/images/spain-flag__67306.15753226231.jpg")}
          resizeMode="contain"
          style={styles.image2}
        ></Image> */}
        <Text style={styles.spain}>Spain</Text>
        <Text style={styles.sRogersGmailCom2}>+972 (55) 5214 2093</Text>
      </View>
      <Navigation style={styles.navigation}></Navigation>
      <View style={styles.bigButtonIcon2Row}>
        <BigButtonIcon
          name="Name"
          style={styles.bigButtonIcon2}
        ></BigButtonIcon>
        <BigButtonIcon
          icon3Name="security-lock"
          icon3="hand"
          security="Terms & Conditions"
          style={styles.bigButtonIcon3}
        ></BigButtonIcon>
      </View>
      <FlatIconButton style={styles.flatIconButton}></FlatIconButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderWidth: 5,
    borderColor: "rgba(36,108,166,1)",
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
    marginLeft: 35,
  },
  steveRogersRow: {
    height: 29,
    flexDirection: "row",
    marginTop: 27,
    marginLeft: 21,
    marginRight: 24,
  },
  image2: {
    width: 40,
    height: 40,
  },
  spain: {
    fontFamily: "poppins-600",
    color: "rgba(49,49,49,1)",
    fontSize: 16,
    marginLeft: 9,
    marginTop: 8,
  },
  sRogersGmailCom2: {
    fontFamily: "poppins-600",
    color: "rgba(49,49,49,1)",
    fontSize: 16,
    marginLeft: 64,
    marginTop: 8,
  },
  image2Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 21,
    marginRight: 33,
  },
  navigation: {
    width: 375,
    height: 83,
    marginTop: 370,
  },
  bigButtonIcon2: {
    width: 161,
    height: 170,
  },
  bigButtonIcon3: {
    width: 161,
    height: 170,
    marginLeft: 13,
  },
  bigButtonIcon2Row: {
    height: 170,
    flexDirection: "row",
    marginTop: -372,
    marginLeft: 20,
    marginRight: 20,
  },
  flatIconButton: {
    height: 43,
    width: 128,
    marginTop: 63,
    marginLeft: 247,
  },
});

export default AccountPage;
