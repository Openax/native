import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import SyncStorage from "sync-storage";

function MaterialButtonPrimary(props) {
  const onPressHandler = () => {
    console.log(
      "payloadPOST",
      SyncStorage.get("fooA"),
      SyncStorage.get("fooB")
    );

    fetch("https://sandboxcrm.luwfy.com/react-native-test", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        firstName: "DENYS",
        secondName: "NETOSIN",
      }),
    })
      .then((response) => {
        //console.log("response", response.json());
        response.json();
      })
      .then((responseJson) => {
        console.log("response object:", responseJson);
      });
  };

  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={onPressHandler}
    >
      <Text style={styles.caption}>{props.caption || "BUTTON"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2196F3",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  caption: {
    color: "#fff",
    fontSize: 14,
  },
});

export default MaterialButtonPrimary;
