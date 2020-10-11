import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialRadio from "../components/MaterialRadio";
import Svg, { Ellipse } from "react-native-svg";
import MaterialRadio2 from "../components/MaterialRadio2";
import Bluebutton from "../components/Bluebutton";
import SIgnupcomponent from "../components/SIgnupcomponent";

function Accounttype(props) {
  return (
    <View style={styles.container}>
      <View style={styles.formAccounttype}>
        <View style={styles.icon3Row}>
          <FontAwesomeIcon name="user" style={styles.icon3}></FontAwesomeIcon>
          <MaterialIconsIcon
            name="business-center"
            style={styles.icon2}
          ></MaterialIconsIcon>
        </View>
        <View style={styles.individualRow}>
          <Text style={styles.individual}>Individual</Text>
          <Text style={styles.company}>Company</Text>
        </View>
        <View style={styles.materialRadioStackRow}>
          <View style={styles.materialRadioStack}>
            <MaterialRadio style={styles.materialRadio}></MaterialRadio>
            <Svg viewBox="0 0 10.87 10.87" style={styles.ellipse}>
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
          </View>
          <MaterialRadio2 style={styles.materialRadio2}></MaterialRadio2>
        </View>
        <Bluebutton
          button3="Next"
          button4="Email"
          style={styles.bluebutton}
        ></Bluebutton>
      </View>
      <Text style={styles.loremIpsum1}>How can we support you?</Text>
      <View style={styles.group1}>
        <View style={styles.rect1StackStack}>
          <View style={styles.rect1Stack}>
            <View style={styles.rect1}></View>
            <View style={styles.group2}>
              <Svg viewBox="0 0 13.48 12.57" style={styles.ellipse1}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(36,108,166,1)"
                  cx={7}
                  cy={6}
                  rx={7}
                  ry={6}
                ></Ellipse>
              </Svg>
              <Svg viewBox="0 0 13.48 12.57" style={styles.ellipse2}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(36,108,166,1)"
                  cx={7}
                  cy={6}
                  rx={7}
                  ry={6}
                ></Ellipse>
              </Svg>
              <Svg viewBox="0 0 13.48 12.57" style={styles.ellipse3}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(36,108,166,1)"
                  cx={7}
                  cy={6}
                  rx={7}
                  ry={6}
                ></Ellipse>
              </Svg>
              <Svg viewBox="0 0 13.48 12.57" style={styles.ellipse4}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(230, 230, 230,1)"
                  cx={7}
                  cy={6}
                  rx={7}
                  ry={6}
                ></Ellipse>
              </Svg>
            </View>
          </View>
          <View style={styles.rect2}></View>
          <View style={styles.rect3}></View>
        </View>
      </View>
      <SIgnupcomponent style={styles.sIgnupcomponent}></SIgnupcomponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  formAccounttype: {
    width: 334,
    height: 386,
    marginTop: 316,
    marginLeft: 20
  },
  icon3: {
    color: "rgba(36,108,166,1)",
    fontSize: 75
  },
  icon2: {
    color: "rgba(49,49,49,1)",
    fontSize: 75,
    marginLeft: 111
  },
  icon3Row: {
    height: 75,
    flexDirection: "row",
    marginLeft: 56,
    marginRight: 39
  },
  individual: {
    fontFamily: "poppins-600",
    color: "rgba(36,108,166,1)",
    fontSize: 16
  },
  company: {
    fontFamily: "poppins-600",
    color: "rgba(49,49,49,1)",
    fontSize: 16,
    marginLeft: 94
  },
  individualRow: {
    height: 25,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 41,
    marginRight: 36
  },
  materialRadio: {
    height: 40,
    width: 40,
    position: "absolute",
    left: 0,
    top: 0
  },
  ellipse: {
    top: 14,
    left: 14,
    width: 11,
    height: 11,
    position: "absolute"
  },
  materialRadioStack: {
    width: 40,
    height: 40
  },
  materialRadio2: {
    height: 40,
    width: 40,
    marginLeft: 134
  },
  materialRadioStackRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 44,
    marginLeft: 63,
    marginRight: 57
  },
  bluebutton: {
    width: 334,
    height: 36,
    marginTop: 131
  },
  loremIpsum1: {
    fontFamily: "poppins-500",
    color: "rgba(49,49,49,1)",
    textAlign: "left",
    fontSize: 16,
    marginTop: -487,
    alignSelf: "center"
  },
  group1: {
    width: 229,
    height: 50,
    marginTop: -115,
    marginLeft: 73
  },
  rect1: {
    top: 5,
    width: 60,
    height: 3,
    position: "absolute",
    backgroundColor: "rgba(36,108,166,1)",
    borderRadius: 100,
    left: 12
  },
  group2: {
    top: 0,
    left: 0,
    width: 229,
    height: 50,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  ellipse1: {
    width: 13,
    height: 13
  },
  ellipse2: {
    width: 13,
    height: 13
  },
  ellipse3: {
    width: 13,
    height: 13
  },
  ellipse4: {
    width: 13,
    height: 13
  },
  rect1Stack: {
    top: 0,
    left: 0,
    width: 229,
    height: 50,
    position: "absolute"
  },
  rect2: {
    top: 5,
    width: 60,
    height: 3,
    position: "absolute",
    backgroundColor: "rgba(230,230,230,1)",
    borderRadius: 100,
    left: 157
  },
  rect3: {
    top: 5,
    width: 60,
    height: 3,
    position: "absolute",
    backgroundColor: "rgba(36,108,166,1)",
    borderRadius: 100,
    left: 84
  },
  rect1StackStack: {
    width: 229,
    height: 50
  },
  sIgnupcomponent: {
    width: 200,
    height: 36,
    marginTop: -115,
    marginLeft: 20
  }
});

export default Accounttype;
