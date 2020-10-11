import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TextInput, Button } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Formik, Field, Form } from "formik";
import MaterialButtonWithVioletText from "../MaterialButtonWithVioletText";
import Mediumbutton from "../Mediumbutton";
import MaterialFixedLabelTextbox from "../MaterialFixedLabelTextbox";
import MaterialButtonWithVioletText1 from "../MaterialButtonWithVioletText1";
import MaterialButtonWithVioletText2 from "../sharedComponents/MaterialButtonWithText";
import MaterialButtonWithVioletText3 from "../sharedComponents/MaterialButtonWithText";

export function CustomTextInput(props) {
  const styles = StyleSheet.create({
    container: {
      borderBottomWidth: 1,
      borderColor: "#D9D5DC",
      backgroundColor: "transparent",
      flexDirection: "row",
      paddingLeft: 16,
      marginBottom: 30,
    },
    email: {
      //fontFamily: "poppins-regular",
      fontSize: 16,
      lineHeight: 16,
      paddingTop: 16,
      paddingBottom: 8,
      color: "#000",
      opacity: 0.5,
      alignSelf: "flex-start",
    },
    inputStyle: {
      color: "rgba(49,49,49,1)",
      paddingRight: 5,
      fontFamily: "poppins-regular",
      fontSize: 16,
      alignSelf: "stretch",
      flex: 1,
      lineHeight: 16,
      paddingTop: 16,
      paddingBottom: 8,
      paddingLeft: 30,
    },
  });

  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.email}> {props.labelText}</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={props.handleChange("email")}
        onBlur={props.handleBlur("email")}
        value={props.value}
      />
    </View>
  );
}

function FormicWrapperComponent(props) {
  let styles = {
    forgotpasswordbutton: {
      height: 36,
      width: 100,
      marginLeft: 215,
    },
    buttons: {
      display: "flex",
      flexDirection: "row",
      width: "90%",
      justifyContent: "space-between",
      marginBottom: 90,
    },

    logintopbutton: {
      height: 36,
      width: 100,
    },
    footer: {
      marginTop: 30,
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-evenly",
    },
  };

  let clickSignUpBtn = () => {
    console.log("CLICK_BTN");
    props.navigation.navigate("SignUp");
  };

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Image
          source={{
            uri: "https://openax.com/image/1e9e3e9205f11f088949d0adbd92eae7",
          }}
          style={{
            width: 163,
            height: 100,
            resizeMode: "contain",
          }}
        />
      </View>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <View style={styles.buttons}>
              <MaterialButtonWithVioletText2
                text={"Log In"}
                style={styles.logintopbutton}
              ></MaterialButtonWithVioletText2>
              <MaterialButtonWithVioletText2
                text={"Sign up"}
                style={styles.logintopbutton}
                textStyle={{
                  opacity: 0.5,
                  fontSize: 16,
                  fontFamily: "poppins-regular",
                }}
                clickHandler={clickSignUpBtn}
              ></MaterialButtonWithVioletText2>
              {/* <Text style={styles.logintopbutton}> Log in</Text> */}
            </View>
            {/* <MaterialFixedLabelTextbox
            value={values.email}
          ></MaterialFixedLabelTextbox> */}
            <CustomTextInput
              labelText={"Email"}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values.email}
            ></CustomTextInput>

            <CustomTextInput
              labelText={"Password"}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values.password}
            ></CustomTextInput>

            <MaterialButtonWithVioletText1
              style={styles.forgotpasswordbutton}
            ></MaterialButtonWithVioletText1>

            <View style={styles.footer}>
              <MaterialButtonWithVioletText
                onPress={handleSubmit}
                text="Face ID"
              ></MaterialButtonWithVioletText>

              <Mediumbutton
                onPress={handleSubmit}
                title="Log in"
              ></Mediumbutton>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

export default FormicWrapperComponent;
