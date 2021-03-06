import React from "react";

import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";
import GlobalStyle from "../constants/global.style";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={
        {...GlobalStyle.bodyText, ...styles.number }
      }>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.secondary,
    padding: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  number: {
    fontSize: 22,
    textAlign: "center",
    color: Colors.secondary,
  },
});

export default NumberContainer;
