import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonWithVioletText4 from "./MaterialButtonWithVioletText4";
import MaterialButtonWithVioletText6 from "./MaterialButtonWithVioletText6";

function SIgnupcomponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.materialButtonWithVioletText1Row}>
        <MaterialButtonWithVioletText4
          style={styles.materialButtonWithVioletText1}
        ></MaterialButtonWithVioletText4>
        <MaterialButtonWithVioletText6
          style={styles.materialButtonWithVioletText2}
        ></MaterialButtonWithVioletText6>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  materialButtonWithVioletText1: {
    height: 36,
    width: 100
  },
  materialButtonWithVioletText2: {
    height: 36,
    width: 100
  },
  materialButtonWithVioletText1Row: {
    height: 36,
    flexDirection: "row",
    flex: 1
  }
});

export default SIgnupcomponent;
