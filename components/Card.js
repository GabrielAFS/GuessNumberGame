import React from "react";

import { View, StyleSheet, Dimensions } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 5, // Habilita o shadow no Android
    backgroundColor: "white",
    padding: Dimensions.get('window').width > 360 ? 20 : 7,
    borderRadius: 10,
  },
});

export default Card;
