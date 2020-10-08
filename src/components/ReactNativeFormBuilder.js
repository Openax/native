import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Alert } from "react-native";

const fields = [
  {
    type: "text",
    name: "user_name",
    required: true,
    icon: "ios-person",
    label: "Username",
  },
  {
    type: "password",
    name: "password",
    icon: "ios-lock",
    required: true,
    label: "Password",
  },
  {
    type: "picker",
    name: "country",
    mode: "dialog",
    label: "Select Country",
    defaultValue: "INDIA",
    options: ["US", "INDIA", "UK", "CHINA", "FRANCE"],
  },
];

class ReactNativeFormBuilder extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        {/* <View>
          <GenerateForm
            ref={(c) => {
              this.formGenerator = c;
            }}
            fields={fields}
          />
        </View>
        <View style={styles.submitButton}>
          <Button block onPress={() => this.login()}>
            <Text>Login</Text>
          </Button>
        </View> */}
      </View>
    );
  }
}

export default ReactNativeFormBuilder;
