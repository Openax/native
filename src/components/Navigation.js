import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Navigation(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={() => console.log("Navigate to Home")}
          style={styles.button}
        >
          <FontAwesomeIcon name="home" style={styles.icon}></FontAwesomeIcon>
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("Navigate to Stats")}
          style={styles.button2}
        >
          <SimpleLineIconsIcon
            name="graph"
            style={styles.icon2}
          ></SimpleLineIconsIcon>
          <Text style={styles.stats}>Stats</Text>
        </TouchableOpacity>
        <View style={styles.button3Stack}>
          <TouchableOpacity
            onPress={() => console.log("Navigate to Account")}
            style={styles.button3}
          >
            <FontAwesomeIcon name="user" style={styles.icon4}></FontAwesomeIcon>
            <Text style={styles.account}>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Navigate to Notifications")}
            style={styles.button4}
          >
            <IoniconsIcon
              name="ios-notifications"
              style={styles.icon3}
            ></IoniconsIcon>
            <Text style={styles.notifications}>Notifications</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  button: {
    width: 95,
    height: 83,
    backgroundColor: "rgba(255,255,255,1)"
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 30,
    width: 28,
    marginTop: 9,
    marginLeft: 32
  },
  text: {
    fontFamily: "poppins-regular",
    color: "rgba(128,128,128,1)",
    fontSize: 12,
    marginTop: 2,
    marginLeft: 30
  },
  button2: {
    width: 95,
    height: 83,
    backgroundColor: "rgba(255,255,255,1)"
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 34,
    width: 30,
    marginTop: 7,
    marginLeft: 29
  },
  stats: {
    fontFamily: "poppins-regular",
    color: "rgba(128,128,128,1)",
    fontSize: 12,
    marginLeft: 29
  },
  button3: {
    top: 0,
    left: 0,
    width: 95,
    height: 83,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 30,
    width: 21,
    marginTop: 7,
    marginLeft: 35
  },
  account: {
    fontFamily: "poppins-regular",
    color: "rgba(128,128,128,1)",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 20
  },
  button4: {
    top: 0,
    left: 94,
    width: 91,
    height: 83,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 33,
    width: 19,
    marginTop: 7,
    marginLeft: 35
  },
  notifications: {
    fontFamily: "poppins-regular",
    color: "rgba(128,128,128,1)",
    fontSize: 12,
    marginTop: 1,
    marginLeft: 7
  },
  button3Stack: {
    width: 185,
    height: 83
  },
  buttonRow: {
    height: 83,
    flexDirection: "row",
    flex: 1
  }
});

export default Navigation;
