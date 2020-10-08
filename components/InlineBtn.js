import React from "react";

import { View, Button, StyleSheet } from "react-native";

const InlineBtn = (props) => {
  return (
    <View style={{ ...styles.button, ...props.style }}>
      <Button {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 110,
    maxWidth: '50%',
    paddingHorizontal: 5,
  },
});

export default InlineBtn;
