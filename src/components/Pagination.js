import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function Pagination(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.ellipse2Row}>
        <Svg viewBox="0 0 9.92 9.64" style={styles.ellipse2}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(36,108,166,1)"
            cx={5}
            cy={5}
            rx={5}
            ry={5}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 9.64 9.64" style={styles.ellipse3}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={5}
            cy={5}
            rx={5}
            ry={5}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 9.64 9.64" style={styles.ellipse4}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={5}
            cy={5}
            rx={5}
            ry={5}
          ></Ellipse>
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  ellipse2: {
    width: 10,
    height: 10
  },
  ellipse3: {
    width: 10,
    height: 10,
    marginLeft: 10
  },
  ellipse4: {
    width: 10,
    height: 10,
    marginLeft: 9
  },
  ellipse2Row: {
    height: 10,
    flexDirection: "row",
    flex: 1
  }
});

export default Pagination;
