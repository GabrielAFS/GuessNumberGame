import React from "react";

import { TextInput, StyleSheet, Dimensions } from "react-native";

const Input = (props) => {
  return (
    <TextInput
      {...props}
      style={{ ...styles.input, ...props.style }} 
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: Dimensions.get('window').height > 520 ? 30 : 15,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
