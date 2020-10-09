import React from "react";

import { View, Button, StyleSheet, Dimensions } from "react-native";

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
    maxWidth: Dimensions.get('window').width * 0.3,
    paddingHorizontal: 5,
  },
});

export default InlineBtn;
