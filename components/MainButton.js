import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Dimensions,
  Platform,
  Button,
} from "react-native";

import Colors from "../constants/colors";

const MainButton = (props) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  // Previne que a sombra formada pelo NativeFeedback apareça
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden'
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Dimensions.get("window").height > 520 ? 12 : 6,
    paddingHorizontal: Dimensions.get("window").width > 360 ? 30 : 15,
    borderRadius: 25,
  },
  buttonText: {
    fontFamily: "open-sans",
    fontSize: 18,
    color: "white",
  },
});

export default MainButton;
