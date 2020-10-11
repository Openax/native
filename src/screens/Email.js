import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import MaterialFixedLabelTextbox from "../components/MaterialFixedLabelTextbox";
import MaterialFixedLabelTextbox1 from "../components/MaterialFixedLabelTextbox1";
import Bluebutton from "../components/Bluebutton";
import SIgnupcomponent from "../components/SIgnupcomponent";

function Email(props) {
  return (
    <View style={styles.container}>
      {/* <View style={styles.group1}>
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
                  fill="rgba(36,108,166,1)"
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
      <View style={styles.registeremailform}>
        <MaterialFixedLabelTextbox
          style={styles.materialFixedLabelTextbox}
        ></MaterialFixedLabelTextbox>
        <MaterialFixedLabelTextbox1
          style={styles.password1}
        ></MaterialFixedLabelTextbox1>
        <Bluebutton
          button3="Start using Open Ax"
          style={styles.bluebutton}
        ></Bluebutton>
      </View>
      <View style={styles.image1Stack}>
        <Image
          source={require("../assets/images/OPEN_AX_LOGO@2x1.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
        <Text style={styles.weAre}>We are ...</Text>
      </View>
      <SIgnupcomponent style={styles.sIgnupcomponent}></SIgnupcomponent> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  group1: {
    width: 229,
    height: 50,
    marginTop: 125,
    marginLeft: 73,
  },
  rect1: {
    top: 5,
    width: 60,
    height: 3,
    position: "absolute",
    backgroundColor: "rgba(36,108,166,1)",
    borderRadius: 100,
    left: 12,
  },
  group2: {
    top: 0,
    left: 0,
    width: 229,
    height: 50,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ellipse1: {
    width: 13,
    height: 13,
  },
  ellipse2: {
    width: 13,
    height: 13,
  },
  ellipse3: {
    width: 13,
    height: 13,
  },
  ellipse4: {
    width: 13,
    height: 13,
  },
  rect1Stack: {
    top: 0,
    left: 0,
    width: 229,
    height: 50,
    position: "absolute",
  },
  rect2: {
    top: 5,
    width: 60,
    height: 3,
    position: "absolute",
    backgroundColor: "rgba(36,108,166,1)",
    borderRadius: 100,
    left: 157,
  },
  rect3: {
    top: 5,
    width: 60,
    height: 3,
    position: "absolute",
    backgroundColor: "rgba(36,108,166,1)",
    borderRadius: 100,
    left: 84,
  },
  rect1StackStack: {
    width: 229,
    height: 50,
  },
  registeremailform: {
    width: 335,
    height: 259,
    marginTop: 267,
    marginLeft: 19,
  },
  materialFixedLabelTextbox: {
    height: 43,
    width: 335,
  },
  password1: {
    height: 43,
    width: 335,
    marginTop: 40,
  },
  bluebutton: {
    width: 334,
    height: 36,
    marginTop: 97,
    marginLeft: 1,
  },
  image1: {
    top: 0,
    left: 14,
    width: 200,
    height: 200,
    position: "absolute",
  },
  weAre: {
    top: 34,
    left: 0,
    position: "absolute",
    fontFamily: "poppins-600",
    color: "rgba(49,49,49,1)",
    fontSize: 18,
    opacity: 0.5,
  },
  image1Stack: {
    width: 214,
    height: 200,
    marginTop: -495,
    marginLeft: 73,
  },
  sIgnupcomponent: {
    width: 200,
    height: 36,
    marginTop: -346,
    marginLeft: 20,
  },
});

export default Email;
