import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function OldNotification(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={props.customStyle || styles.title5Row}>
        <Text style={styles.title5}>{props.title || "Title"}</Text>
        <Text style={styles.ddMmYyyy4}>{props.date}</Text>
      </View>
      <Text style={styles.name5}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title5: {
    fontFamily: "poppins-600",
    color: "rgba(49,49,49,1)",
  },
  ddMmYyyy4: {
    fontFamily: "roboto-regular",
    color: "rgba(49,49,49,1)",
    opacity: 0.5,
    fontSize: 12,
  },
  title5Row: {
    height: 16,
    flexDirection: "row",
    marginLeft: 39,
    marginRight: -1,
    justifyContent: "space-between",
  },
  name5: {
    fontFamily: "poppins-regular",
    color: "rgba(49,49,49,1)",
    fontSize: 12,
    marginTop: 1,
    marginLeft: 39,
  },
});

export default OldNotification;
