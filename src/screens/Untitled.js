import { StyleSheet, View } from "react-native";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import MaterialHelperTextBox from "../components/MaterialHelperTextBox";
import MaterialHelperTextBox1 from "../components/MaterialHelperTextBox1";
import JsonSchemaReactForm from "../components/JsonSchemaView";
import ReactNativeFormBuilder from "../components/ReactNativeFormBuilder";
import { AsyncStorage } from "react-native";
import React, { useState, useEffect } from "react";

function Untitled(props) {
  const saveToStarage = (responseData) => {
    AsyncStorage.setItem("MOVIES", JSON.stringify(responseData), (err) => {
      if (err) {
        console.log("an error");
        throw err;
      }
      console.log("success");
    }).catch((err) => {
      console.log("error is: " + err);
    });
  };

  const getMoviesFromApi = () => {
    return fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((json) => {
        console.log("MOVIES", json);
        saveToStarage(json.movies);

        return json.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getFromStorage = async () => {
    try {
      const value = await AsyncStorage.getItem("MOVIES");
      if (value !== null) {
        // We have data!!
        console.log("RETRIEVE_DATA_FROM_LOCALSTORAGE", value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    getMoviesFromApi();

    setTimeout(() => {
      getFromStorage();
    }, 5000);
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
  });

  return (
    <View>
      <MaterialButtonPrimary
        caption="BUTTON"
        caption="SUBMIT"
        style={styles.materialButtonPrimary}
      ></MaterialButtonPrimary>
      <MaterialHelperTextBox
        label="StackedLabel"
        inputStyle="Input"
        label="AAA"
        inputStyle="AA"
        style={styles.materialHelperTextBox}
      ></MaterialHelperTextBox>
      <MaterialHelperTextBox1
        label="StackedLabel"
        inputStyle="Input"
        label="BBB"
        inputStyle="BB"
        style={styles.materialHelperTextBox1}
      ></MaterialHelperTextBox1>

      {/* <JsonSchemaReactForm></JsonSchemaReactForm> */}
      {/* <ReactNativeFormBuilder></ReactNativeFormBuilder> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  materialButtonPrimary: {
    height: 36,
    width: 100,
    marginTop: 433,
    marginLeft: 198,
  },
  materialHelperTextBox: {
    height: 90,
    width: 280,
    marginTop: -349,
    marginLeft: 18,
  },
  materialHelperTextBox1: {
    height: 90,
    width: 277,
    marginTop: 55,
    marginLeft: 21,
  },
});

export default Untitled;
