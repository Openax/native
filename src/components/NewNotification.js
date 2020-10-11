import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function NewNotification(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.ellipseStackRow}>
          <View style={styles.ellipseStack}>
            <Svg viewBox="0 0 33.09 33.09" style={styles.ellipse}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(204,204,204,1)"
                cx={17}
                cy={17}
                rx={17}
                ry={17}
              ></Ellipse>
            </Svg>
            <Svg viewBox="0 0 33.09 33.09" style={styles.ellipse2}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(204,204,204,1)"
                cx={17}
                cy={17}
                rx={17}
                ry={17}
              ></Ellipse>
            </Svg>
            <Svg viewBox="0 0 33.09 33.09" style={styles.ellipse3}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(204,204,204,1)"
                cx={17}
                cy={17}
                rx={17}
                ry={17}
              ></Ellipse>
            </Svg>
            <Svg viewBox="0 0 33.09 33.09" style={styles.ellipse4}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(255,255,255,1)"
                cx={17}
                cy={17}
                rx={17}
                ry={17}
              ></Ellipse>
            </Svg>
            <View style={styles.rect2}></View>
          </View>
          <View style={styles.titleColumn}>
            <Text style={styles.title}>{props.title || "Title"}</Text>
            <Text style={styles.name}>{props.name || "Name"}</Text>
          </View>
          <Text style={styles.ddMmYyyy}>{props.ddMmYyyy || "dd/mm/yyyy"}</Text>
        </View>
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
    borderBottomLeftRadius: 15
  },
  ellipse: {
    top: 0,
    left: 6,
    width: 33,
    height: 33,
    position: "absolute"
  },
  ellipse2: {
    top: 0,
    left: 6,
    width: 33,
    height: 33,
    position: "absolute"
  },
  ellipse3: {
    top: 0,
    left: 6,
    width: 33,
    height: 33,
    position: "absolute"
  },
  ellipse4: {
    top: 0,
    left: 6,
    width: 33,
    height: 33,
    position: "absolute"
  },
  rect2: {
    top: 0,
    left: 0,
    width: 22,
    height: 33,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  ellipseStack: {
    width: 39,
    height: 33,
    marginTop: 3
  },
  title: {
    fontFamily: "poppins-600",
    color: "rgba(49,49,49,1)"
  },
  name: {
    fontFamily: "poppins-regular",
    color: "rgba(49,49,49,1)",
    fontSize: 12,
    marginTop: 1
  },
  titleColumn: {
    width: 29,
    marginLeft: 6,
    marginBottom: 4
  },
  ddMmYyyy: {
    fontFamily: "roboto-regular",
    color: "rgba(49,49,49,1)",
    opacity: 0.5,
    fontSize: 12,
    marginLeft: 182
  },
  ellipseStackRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 3,
    marginRight: 12
  }
});

export default NewNotification;
