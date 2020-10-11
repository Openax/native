import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function List(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.name2ColumnRow}>
        <View style={styles.name2Column}>
          <Text numberOfLines={1} style={styles.name2}>
            {props.name2 || "Name"}
          </Text>
          <Text style={styles.ddMmYyyy2}>
            {props.ddMmYyyy2 || "dd/mm/yyyy"}
          </Text>
        </View>
        <Text style={styles.loremIpsum3}>
          {props.loremIpsum3 || "- $1,792.98"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  name2: {
    fontFamily: "poppins-600",
    color: "rgba(49,49,49,1)",
  },
  ddMmYyyy2: {
    fontFamily: "poppins-regular",
    color: "#121212",
    fontSize: 12,
    opacity: 0.5,
    marginTop: 3,
  },
  name2Column: {
    width: 81,
  },
  loremIpsum3: {
    fontFamily: "poppins-600",
    color: "#121212",
    textAlign: "right",
    marginLeft: 133,
    marginTop: 5,
  },
  name2ColumnRow: {
    height: 38,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 35,
    marginRight: 35,
  },
});

export default List;
