import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function NewNotification(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.titleColumn}>
          <Text numberOfLines={1} style={styles.title}>
            {props.title || "Title"}
          </Text>
          <Text numberOfLines={1} style={styles.name}>
            {props.name || "Name"}
          </Text>
        </View>
        <Text numberOfLines={1} style={styles.ddMmYyyy}>
          {props.ddMmYyyy || "dd/mm/yyyy"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 335,
    height: 45,
    backgroundColor: "rgba(244,244,244,1)",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  title: {
    fontFamily: "poppins-600",
    color: "rgba(49,49,49,1)",
  },
  name: {
    fontFamily: "poppins-regular",
    color: "rgba(49,49,49,1)",
    fontSize: 12,
    marginTop: 1,
  },
  titleColumn: {
    width: 29,
    marginLeft: 6,
    marginBottom: 4,
  },
  ddMmYyyy: {
    fontFamily: "roboto-regular",
    color: "rgba(49,49,49,1)",
    opacity: 0.5,
    fontSize: 12,
    marginLeft: 182,
  },
  ellipseStackRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 3,
    marginRight: 12,
  },
});

export default NewNotification;
