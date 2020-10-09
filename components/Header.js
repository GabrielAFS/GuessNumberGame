import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform
} from "react-native";

import Colors from "../constants/colors";
import GlobalStyle from "../constants/global.style";

const Header = (props) => {
  return (
    <View style={{
      ...styles.header,
      ...Platform.select({
        ios: styles.headerIOS,
        android: styles.headerAndroid
      })
    }}>
      <Text style={{...GlobalStyle.titleText, ...styles.title}}>{props.title}</Text>
    </View>
  );
};

let height = 90,
  paddingTop = 36;

if (Dimensions.get("window").height <= 520) {
  height = 50;
  paddingTop = 18;
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: height,
    paddingTop: paddingTop,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
  },
  title: {
    color: Platform.OS === 'ios' ? Colors.primary : 'white'
  }
});

export default Header;
