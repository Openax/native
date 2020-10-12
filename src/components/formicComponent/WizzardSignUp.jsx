import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { Formik, Field, Form } from "formik";
import MaterialButtonWithVioletText2 from "../sharedComponents/MaterialButtonWithText";
import MaterialButtonWithVioletText7 from "../MaterialButtonWithVioletText7";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import Mediumbutton from "../Mediumbutton";
import UnderlineTextInput from "../sharedComponents/UnderlineTextInput";
import RadioGroupComp from "../sharedComponents/RadioGroup";
import { CustomTextInput } from "./CustomTextInput";

//import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

export default class WizzardSignUp extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      console.log("NAVIGATION_CURRENT", this.props.navigation, this.props);
    }, 4000);

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
        marginTop: 50,
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
                    <UnderlineTextInput />
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
                    <View
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Text
                        style={{
                          fontFamily: "poppins-500",
                          color: "rgba(49,49,49,1)",
                          textAlign: "left",
                          fontSize: 16,
                        }}
                      >
                        How can we support you?
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <RadioGroupComp></RadioGroupComp>
                    </View>
                  </View>
                )}
                {currentStep == 3 && (
                  <View
                    style={{
                      width: "100%",
                      padding: 50,
                      alignSelf: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "poppins-600",
                        color: "rgba(49,49,49,1)",
                        fontSize: 18,
                        opacity: 0.5,
                      }}
                    >
                      We are...
                    </Text>

                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 30,
                      }}
                    >
                      <Image
                        source={{
                          uri:
                            "https://openax.com/image/1e9e3e9205f11f088949d0adbd92eae7",
                        }}
                        style={{
                          width: 200,
                          height: 100,
                          resizeMode: "contain",
                        }}
                      />
                    </View>

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
                  )}
                  {currentStep + 1 == steps.length && (
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
                          this.props.navigation.navigate("Home");
                        }}
                      ></Mediumbutton>
                    </View>
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
