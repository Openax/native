import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import SIgnupcomponent from "../components/SIgnupcomponent";
import MaterialButtonWithVioletText7 from "../components/MaterialButtonWithVioletText7";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import Bluebutton from "../components/Bluebutton";
import Svg, { Ellipse } from "react-native-svg";

function Verifycode(props) {
  return (
    <View style={styles.container}>
      <SIgnupcomponent style={styles.sIgnupcomponent}></SIgnupcomponent>
      <Text style={styles.loremIpsum}>
        Please type the verification code{"\n"} we sent by SMS
      </Text>
      <View style={styles.materialButtonWithVioletText7StackStack}>
        <View style={styles.materialButtonWithVioletText7Stack}>
          <MaterialButtonWithVioletText7
            style={styles.materialButtonWithVioletText7}
          ></MaterialButtonWithVioletText7>
          <View style={styles.verifyform}>
            <View style={styles.materialUnderlineTextboxRow}>
              <MaterialUnderlineTextbox
                inputStyle="   1"
                style={styles.materialUnderlineTextbox}
              ></MaterialUnderlineTextbox>
              <MaterialUnderlineTextbox
                inputStyle="   1"
                style={styles.materialUnderlineTextbox3}
              ></MaterialUnderlineTextbox>
              <MaterialUnderlineTextbox
                inputStyle="   1"
                style={styles.materialUnderlineTextbox4}
              ></MaterialUnderlineTextbox>
              <MaterialUnderlineTextbox
                inputStyle="   1"
                style={styles.materialUnderlineTextbox5}
              ></MaterialUnderlineTextbox>
            </View>
            <Bluebutton
              button3="Verify"
              button4="Accounttype"
              style={styles.bluebutton}
            ></Bluebutton>
          </View>
        </View>
        <Text style={styles.or4}>Or</Text>
      </View>
      <View style={styles.group1}>
        <View style={styles.rect6StackStack}>
          <View style={styles.rect6Stack}>
            <View style={styles.rect6}></View>
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
                  fill="rgba(230, 230, 230,1)"
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
          <View style={styles.rect7}></View>
          <View style={styles.rect8}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sIgnupcomponent: {
    height: 36,
    width: 200,
    marginTop: 60,
    marginLeft: 20
  },
  loremIpsum: {
    fontFamily: "poppins-500",
    color: "rgba(49,49,49,1)",
    textAlign: "left",
    fontSize: 16,
    marginTop: 141,
    marginLeft: 19
  },
  materialButtonWithVioletText7: {
    height: 36,
    width: 175,
    position: "absolute",
    left: 80,
    top: 111
  },
  verifyform: {
    top: 0,
    left: 0,
    width: 334,
    height: 325,
    position: "absolute"
  },
  materialUnderlineTextbox: {
    height: 43,
    width: 60
  },
  materialUnderlineTextbox3: {
    height: 43,
    width: 60,
    marginLeft: 3
  },
  materialUnderlineTextbox4: {
    height: 43,
    width: 60,
    marginLeft: 5
  },
  materialUnderlineTextbox5: {
    height: 43,
    width: 60,
    marginLeft: 4
  },
  materialUnderlineTextboxRow: {
    height: 43,
    flexDirection: "row",
    marginLeft: 41,
    marginRight: 41
  },
  bluebutton: {
    width: 334,
    height: 36,
    marginTop: 246
  },
  materialButtonWithVioletText7Stack: {
    top: 0,
    left: 0,
    width: 334,
    height: 325,
    position: "absolute"
  },
  or4: {
    top: 70,
    left: 160,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "#121212"
  },
  materialButtonWithVioletText7StackStack: {
    width: 334,
    height: 325,
    marginTop: 86,
    marginLeft: 20
  },
  group1: {
    width: 229,
    height: 50,
    marginTop: -573,
    marginLeft: 73
  },
  rect6: {
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
  rect6Stack: {
    top: 0,
    left: 0,
    width: 229,
    height: 50,
    position: "absolute"
  },
  rect7: {
    top: 5,
    width: 60,
    height: 3,
    position: "absolute",
    backgroundColor: "rgba(230,230,230,1)",
    borderRadius: 100,
    left: 157
  },
  rect8: {
    top: 5,
    width: 60,
    height: 3,
    position: "absolute",
    backgroundColor: "rgba(230,230,230,1)",
    borderRadius: 100,
    left: 84
  },
  rect6StackStack: {
    width: 229,
    height: 50
  }
});

export default Verifycode;
