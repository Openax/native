import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import { Formik, Field, Form } from "formik";
import MaterialButtonWithVioletText2 from "../sharedComponents/MaterialButtonWithText";
import MaterialButtonWithVioletText7 from "../MaterialButtonWithVioletText7";
import MaterialButtonWithVioletText from "../MaterialButtonWithVioletText";
import MaterialUnderlineTextbox from "../MaterialUnderlineTextbox";
import Mediumbutton from "../Mediumbutton";

import { CustomTextInput } from "./CustomTextInput";

import MaterialRadio from "../MaterialRadio";
import Svg, { Ellipse } from "react-native-svg";
import MaterialRadio2 from "../MaterialRadio2";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
//import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sIgnupcomponent: {
    height: 36,
    width: 200,
    marginTop: 60,
    marginLeft: 20,
  },
  loremIpsum: {
    // fontFamily: "poppins-500",
    color: "rgba(49,49,49,1)",
    textAlign: "left",
    fontSize: 16,
    marginTop: 141,
    marginLeft: 19,
  },
  materialRadio: {
    height: 40,
    width: 40,
    position: "absolute",
    left: 0,
    top: 0,
  },
  ellipse: {
    top: 14,
    left: 14,
    width: 11,
    height: 11,
    position: "absolute",
  },
  materialRadioStack: {
    width: 40,
    height: 40,
  },
  materialRadio2: {
    height: 40,
    width: 40,
    marginLeft: 134,
  },
  materialRadioStackRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 179,
    marginLeft: 63,
    marginRight: 57,
  },
  individual: {
    //fontFamily: "poppins-600",
    color: "rgba(36,108,166,1)",
    fontSize: 16,
    marginTop: -109,
    marginLeft: 41,
  },
  company: {
    // fontFamily: "poppins-600",
    color: "rgba(49,49,49,1)",
    fontSize: 16,
    marginLeft: 216,
  },

  materialButtonWithVioletText7: {
    height: 36,
    width: 175,
    position: "absolute",
    left: 80,
    top: 111,
  },
  verifyform: {
    top: 0,
    left: 0,
    width: 334,
    height: 325,
    position: "absolute",
  },

  bluebutton: {
    width: 334,
    height: 36,
    marginTop: 246,
  },
  materialButtonWithVioletText7Stack: {
    top: 0,
    left: 0,
    width: 334,
    height: 325,
    position: "absolute",
  },
  or4: {
    top: 70,
    left: 160,
    position: "absolute",
    //fontFamily: "poppins-regular",
    color: "#121212",
  },
  materialButtonWithVioletText7StackStack: {
    width: 334,
    height: 325,
    marginTop: 86,
    marginLeft: 20,
  },
  group1: {
    width: 229,
    height: 50,
    marginTop: -573,
    marginLeft: 73,
  },
  rect6: {
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
  rect6Stack: {
    top: 0,
    left: 0,
    width: 229,
    height: 50,
    position: "absolute",
  },
  rect7: {
    top: 5,
    width: 60,
    height: 3,
    position: "absolute",
    backgroundColor: "rgba(230,230,230,1)",
    borderRadius: 100,
    left: 157,
  },
  rect8: {
    top: 5,
    width: 60,
    height: 3,
    position: "absolute",
    backgroundColor: "rgba(230,230,230,1)",
    borderRadius: 100,
    left: 84,
  },

  rect6StackStack: {
    width: 229,
    height: 50,
  },
});

export default class WizzardSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0 /* using index 0 as starting point */,
      steps: ["Page One", "Page Two", "Page Three", "Page Four"],
      btnsName: ["Send SMS", "Verify", "Next", "Start using OpenAx"],
    };
  }

  render() {
    const styles = StyleSheet.create({
      centerElement: { justifyContent: "center", alignItems: "center" },

      tinyLogo: {
        width: 50,
        height: 50,
      },
      loremIpsum: {
        fontFamily: "poppins-500",
        color: "rgba(49,49,49,1)",
        fontSize: 16,
        marginTop: -30,
      },
      materialUnderlineTextboxRow: {
        height: 63,
        marginBottom: 50,
        // color: "red",
        // backgroundColor: "green",
        // width: 300,
        flexDirection: "row",
        // display: "flex",
        // justifyContent: "flex-start",
        // marginLeft: 41,
        // marginRight: 41,
      },
      materialUnderlineTextbox: {
        height: 43,
        width: 40,
      },
      materialUnderlineTextbox3: {
        height: 43,
        width: 40,
        marginLeft: 30,
      },
      materialUnderlineTextbox4: {
        height: 43,
        width: 40,
        marginLeft: 40,
      },
      materialUnderlineTextbox5: {
        height: 43,
        width: 40,
        marginLeft: 30,
      },
      icon2: {
        color: "rgba(49,49,49,1)",
        fontSize: 75,
        marginTop: -110,
        marginLeft: 220,
      },
      icon3: {
        color: "rgba(36,108,166,1)",
        fontSize: 75,
        marginLeft: 56,
      },
    });

    const { steps, currentStep, btnsName } = this.state;
    const colorWizzard = "rgba(36,108,166,1)";
    return (
      <View
        style={{
          flexDirection: "column",
          marginTop: 40,
          backgroundColor: "#f6f6f6",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "65%",
            alignItems: "center",
            marginBottom: 0,
          }}
        >
          <MaterialButtonWithVioletText2
            text={"Log in"}
            style={styles.logintopbutton}
            textStyle={{
              opacity: 0.5,
              fontSize: 16,
              fontFamily: "poppins-regular",
            }}
            clickHandler={() => {}}
          ></MaterialButtonWithVioletText2>
          <MaterialButtonWithVioletText2
            text={"Sign up"}
            style={styles.logintopbutton}
          ></MaterialButtonWithVioletText2>
        </View>

        <View
          style={{
            flexDirection: "row",
            // backgroundColor: "#fff",
          }}
        >
          <TouchableOpacity
            style={[styles.centerElement, { width: 50, height: 50 }]}
            onPress={() => {}}
          ></TouchableOpacity>
        </View>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <View style={{ alignItems: "center" }}>
                <View style={{ width: 280, height: 70 }}>
                  <View style={{ alignItems: "center" }}>
                    <View
                      style={{
                        height: 2,
                        backgroundColor: "grey",
                        width: 180,
                        position: "absolute",
                        top: 13,
                        zIndex: 10,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      width: "100%",
                      position: "absolute",
                      zIndex: 20,
                    }}
                  >
                    {steps.map((label, i) => (
                      <View key={i} style={{ alignItems: "center", width: 70 }}>
                        {i > currentStep &&
                          i != currentStep /* Not selected */ && (
                            <View
                              style={{
                                alignItems: "center",
                                justifyContent: "center",
                                width: 30,
                                height: 30,
                                backgroundColor: "grey",
                                borderWidth: 2,
                                borderColor: "grey",
                                borderRadius: 15,
                                marginBottom: 10,
                              }}
                            >
                              <Text style={{ fontSize: 15, color: "#ffffff" }}>
                                {i + 1}
                              </Text>
                            </View>
                          )}
                        {i < currentStep /* Checked */ && (
                          <View
                            style={{
                              alignItems: "center",
                              justifyContent: "center",
                              width: 30,
                              height: 30,
                              backgroundColor: colorWizzard,

                              backgroundColor: colorWizzard,
                              borderRadius: 15,
                              marginBottom: 10,
                            }}
                          ></View>
                        )}
                        {i == currentStep /* Selected */ && (
                          <View
                            style={{
                              alignItems: "center",
                              justifyContent: "center",
                              width: 30,
                              height: 30,
                              backgroundColor: colorWizzard,
                              borderWidth: 2,
                              borderColor: colorWizzard,
                              borderRadius: 15,
                              marginBottom: 10,
                            }}
                          >
                            <Text style={{ fontSize: 13, color: "#ffffff" }}>
                              {i + 1}
                            </Text>
                          </View>
                        )}
                        <Text style={{ fontSize: 12 }}>{label}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>

              <View style={{}}>
                {currentStep == 0 && (
                  <View
                    style={{
                      height: 500,
                      width: "100%",
                      padding: 40,
                      alignSelf: "center",
                    }}
                  >
                    <View style={styles.container}>
                      <View
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          source={{
                            uri:
                              "https://openax.com/image/1e9e3e9205f11f088949d0adbd92eae7",
                          }}
                          style={{
                            // flex: 1,
                            width: 193,
                            height: 100,
                            resizeMode: "contain",
                          }}
                        />
                      </View>
                      {/* EMPTY */}
                      <View
                        style={{
                          marginTop: -133,
                          marginLeft: 123,
                          borderWidth: 1,
                          borderColor: "rgba(36,108,166,1)",
                          width: 144,
                          height: 144,
                        }}
                      />
                      {/* FILLED */}
                      <View
                        style={{
                          marginTop: -110,
                          marginLeft: 185,
                          backgroundColor: "rgba(36,108,166,0.3)",
                          width: 144,
                          height: 144,
                        }}
                      ></View>

                      <Text style={styles.loremIpsum}>
                        Hello! We are Open Ax, {"\n"} nice to meet you
                      </Text>
                    </View>

                    {/* INPUT FIELDS */}
                    <View style={{ marginTop: 30 }}>
                      <CustomTextInput
                        labelText={"Label"}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values.label}
                      ></CustomTextInput>
                      <CustomTextInput
                        labelText={"Last name"}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values.lastName}
                      ></CustomTextInput>
                      <CustomTextInput
                        labelText={"Phone number"}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values.phoneNumber}
                      ></CustomTextInput>
                    </View>
                  </View>
                )}
                {currentStep == 1 && (
                  <View
                    style={{
                      height: 400,
                      width: "100%",
                      padding: 50,
                      alignSelf: "center",
                      display: "flex",
                    }}
                  >
                    <Text style={styles.loremIpsum}>
                      Please type the verification code {"\n"} we sent by SMS
                    </Text>

                    <View style={styles.materialUnderlineTextboxRow}>
                      <MaterialUnderlineTextbox
                        style={styles.materialUnderlineTextbox}
                        // inputStyle="   1"
                      ></MaterialUnderlineTextbox>
                      <MaterialUnderlineTextbox
                        style={styles.materialUnderlineTextbox3}
                        // inputStyle="   1"
                      ></MaterialUnderlineTextbox>
                      <MaterialUnderlineTextbox
                        style={styles.materialUnderlineTextbox4}
                        // inputStyle="   1"
                      ></MaterialUnderlineTextbox>
                      <MaterialUnderlineTextbox
                        style={styles.materialUnderlineTextbox5}
                        // inputStyle="   1"
                      ></MaterialUnderlineTextbox>
                    </View>

                    <View style={{ alignItems: "center" }}>
                      <Text style={styles.loremIpsum}>Or</Text>
                    </View>

                    <MaterialButtonWithVioletText7
                      style={styles.materialButtonWithVioletText7}
                    ></MaterialButtonWithVioletText7>
                  </View>
                )}
                {currentStep == 2 && (
                  <View
                    style={{
                      height: 400,
                      width: "100%",
                      padding: 50,
                      alignSelf: "center",
                    }}
                  >
                    <Text style={styles.loremIpsum}>
                      How can we support you?
                      <View>
                        <View>
                          <View>
                            {/* <MaterialRadio
                              style={styles.materialRadio}
                            ></MaterialRadio> */}
                            {/* <Svg
                              viewBox="0 0 10.87 10.87"
                              style={styles.ellipse}
                            >
                              <Ellipse
                                stroke="rgba(230, 230, 230,1)"
                                strokeWidth={0}
                                fill="rgba(36,108,166,1)"
                                cx={5}
                                cy={5}
                                rx={5}
                                ry={5}
                              ></Ellipse>
                            </Svg> */}
                          </View>
                          {/* <MaterialRadio2
                  
                            style={styles.materialRadio2}
                          ></MaterialRadio2> */}
                        </View>
                        <Image
                          source={{ uri: "../../images/image_afA1..png" }}
                          style={styles.tinyLogo}
                        />
                        <Image
                          source={require("../../assets/images/H1.jpg")}
                          style={styles.tinyLogo}
                        />

                        <Image
                          source={{
                            uri:
                              "https://openax.com/image/1e9e3e9205f11f088949d0adbd92eae7",
                          }}
                          style={{
                            // flex: 1,
                            width: 163,
                            height: 400,
                            resizeMode: "contain",
                          }}
                        />

                        {/* 
                        <Image
                          style={styles.tinyLogo}
                          source={{
                            uri:
                              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
                          }}
                        /> */}

                        <Text style={styles.individual}>Individual</Text>
                        <Text style={styles.company}>Company</Text>
                        <MaterialIconsIcon
                          name="airline-seat-individual-suite"
                          style={styles.icon2}
                        ></MaterialIconsIcon>
                        {/* <FontAwesomeIcon
                          name="user"
                          style={styles.icon3}
                        ></FontAwesomeIcon> */}
                      </View>
                    </Text>
                  </View>
                )}
                {currentStep == 3 && (
                  <View
                    style={{
                      height: 200,
                      width: "100%",
                      padding: 50,
                      alignSelf: "center",
                    }}
                  >
                    <Text style={styles.individual}>We are...</Text>
                    <CustomTextInput
                      labelText={"Email"}
                      secure={false}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      values={values.phoneNumber}
                    ></CustomTextInput>
                    <CustomTextInput
                      secure={true}
                      labelText={"Password"}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      values={values.phoneNumber}
                    ></CustomTextInput>
                  </View>
                )}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {/* DUISABLE FOR BTN BACK */}
                  {currentStep > 100000 ? (
                    <TouchableOpacity
                      style={[
                        styles.centerElement,
                        {
                          bottom: 10,
                          left: 10,
                          width: 80,
                          height: 35,
                          backgroundColor: "#ee5e30",
                          elevation: 10,
                          borderRadius: 20,
                        },
                      ]}
                      onPress={() => {
                        if (currentStep > 0) {
                          this.setState({ currentStep: currentStep - 1 });
                        }
                      }}
                    >
                      <Text style={{ color: "#fff" }}>Back</Text>
                    </TouchableOpacity>
                  ) : (
                    <Text> </Text>
                  )}
                  {currentStep + 1 <
                    steps.length /* add other conditions here */ && (
                    <View style={{ width: "100%", justifyContent: "center" }}>
                      <Mediumbutton
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        styleText={{
                          fontFamily: "poppins-600",
                          color: "rgba(255,255,255,1)",
                          justifyContent: "center",
                          fontSize: 16,
                          textAlign: "center",
                        }}
                        styleBtn={{
                          width: "90%",
                          height: 36,
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "rgba(36,108,166,1)",
                          borderRadius: 10,
                        }}
                        title={this.state.btnsName[currentStep]}
                        onPress={() => {
                          if (currentStep + 1 < steps.length) {
                            this.setState({ currentStep: currentStep + 1 });
                          }
                        }}
                      ></Mediumbutton>
                    </View>

                    // <TouchableOpacity
                    //   style={[
                    //     styles.centerElement,
                    //     {
                    //       bottom: 10,
                    //       right: 10,
                    //       width: 80,
                    //       height: 35,
                    //       marginRight: 30,
                    //       backgroundColor: "#ee5e30",
                    //       elevation: 10,
                    //       borderRadius: 20,
                    //     },
                    //   ]}
                    // onPress={() => {
                    //   if (currentStep + 1 < steps.length) {
                    //     this.setState({ currentStep: currentStep + 1 });
                    //   }
                    // }}
                    // >
                    //   <Text style={{ color: "#fff" }}>
                    //     {this.state.btnsName[currentStep]}
                    //   </Text>
                    // </TouchableOpacity>
                  )}
                  {currentStep + 1 ==
                    steps.length /* add other conditions here */ && (
                    <TouchableOpacity
                      style={[
                        styles.centerElement,
                        {
                          bottom: 10,
                          right: 10,
                          width: 80,
                          height: 35,
                          backgroundColor: "#ee5e30",
                          elevation: 10,
                          borderRadius: 20,
                        },
                      ]}
                      onPress={() => {
                        console.log("Finish");
                      }}
                    >
                      <Text style={{ color: "#fff" }}>Finish</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>
    );
  }
}
