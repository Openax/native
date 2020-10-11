import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Alert } from "react-native";

const step1schema = {
  title: "Step 1",
  type: "object",
  required: ["name"],
  properties: {
    name: { type: "string", minLength: 3 },
  },
};
const step2schema = {
  title: "Step 2",
  type: "object",
  required: ["age"],
  properties: {
    age: { type: "integer" },
  },
};

const testSchema = {
  title: "A registration form",
  description: "A simple form example.",
  type: "object",
  required: ["firstName", "lastName"],
  properties: {
    firstName: {
      type: "string",
      title: "First name",
    },
    lastName: {
      type: "string",
      title: "Last name",
    },
    age: {
      type: "integer",
      title: "Age",
    },
    bio: {
      type: "string",
      title: "Bio",
    },
    password: {
      type: "string",
      title: "Password",
      minLength: 3,
    },
    telephone: {
      type: "string",
      title: "Telephone",
      minLength: 10,
    },
  },
};

const uiSchemaTest = {
  firstName: {
    "ui:autofocus": true,
    "ui:emptyValue": "",
  },
  age: {
    "ui:widget": "updown",
    "ui:title": "Age of person",
    "ui:description": "(earthian year)",
  },
  bio: {
    "ui:widget": "textarea",
  },
  password: {
    "ui:widget": "password",
    "ui:help": "Hint: Make it strong!",
  },
  date: {
    "ui:widget": "alt-datetime",
  },
  telephone: {
    "ui:options": {
      inputType: "tel",
    },
  },
};

class JsonSchemaReactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 1, formData: {} };
  }

  schema = {
    type: "object",
    properties: {
      foo: {
        type: "object",
        properties: {
          bar: { type: "string" },
        },
      },
      baz: {
        type: "array",
        items: {
          type: "object",
          properties: {
            des: {
              type: "string",
            },
            des2: {
              type: "string",
            },
            des3: {
              type: "string",
            },
          },
        },
      },
    },
  };

  uiSchema = {
    foo: {
      bar: {
        "ui:widget": "textarea",
      },
    },
    baz: {
      // note the "items" for an array
      items: {
        des: {
          "ui:widget": "textarea",
        },
      },
    },
  };

  styles = StyleSheet.create({
    container: {
      backgroundColor: "yellow",
      padding: 20,
    },
    notch: {
      width: "100%",
      height: 15,
    },
  });

  onError = (errors) => console.log("I have", errors.length, "errors to fix");

  onSubmit = ({ formData }) => {
    console.log("ON_SUBMIT");
    if (this.state.step === 1) {
      this.setState({
        step: 2,
        formData: {
          ...this.state.formData,
          ...formData,
        },
      });
    } else {
      alert("You submitted " + JSON.stringify(formData, null, 2));
    }
  };

  onChange = (event) => {
    console.log("EVENT_CHANGE", event);
  };

  render() {
    return (
      <View style={this.styles.container}>
        {/* <Form
          schema={this.state.step === 1 ? step1schema : step2schema}
          onSubmit={this.onSubmit}
          onError={this.onError}
          onChange={this.onChange}
          formData={this.state.formData}
        ></Form> */}

        <Form
          schema={testSchema}
          uiSchema={uiSchemaTest}
          onSubmit={this.onSubmit}
          onError={this.onError}
          onChange={this.onChange}
          formData={this.state.formData}
        ></Form>
      </View>
    );
  }
}

export default JsonSchemaReactForm;
