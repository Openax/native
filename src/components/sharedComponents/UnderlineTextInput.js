import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 4;

const UnderlineTextInput = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const styles = StyleSheet.create({
    root: { padding: 20, minHeight: 200 },
    title: { textAlign: "center", fontSize: 30 },
    codeFieldRoot: {
      marginTop: 20,
      width: 280,
      marginLeft: "auto",
      marginRight: "auto",
    },
    cellRoot: {
      width: 60,
      height: 60,
      justifyContent: "center",
      alignItems: "center",
      borderBottomColor: "#ccc",
      borderBottomWidth: 1,
    },
    cellText: {
      color: "#000",
      fontSize: 36,
      textAlign: "center",
    },
    focusCell: {
      borderBottomColor: "#007AFF",
      borderBottomWidth: 2,
    },
  });

  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}
          >
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default UnderlineTextInput;
