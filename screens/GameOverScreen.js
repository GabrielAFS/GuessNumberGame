import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';

import MainButton from "../components/MainButton";

import Colors from "../constants/colors";
import GlobalStyle from "../constants/global.style";

const GameOverScreen = (props) => {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={GlobalStyle.titleText}>The Game is over!</Text>
        <View style={styles.imageContainer}>
          <Image
            // source={require('../assets/success.png')}
            source={{
              uri:
                "https://i.kym-cdn.com/photos/images/newsfeed/000/865/302/3d5.gif",
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          <Text style={{ ...GlobalStyle.bodyText, ...styles.resultText }}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number{" "}
            <Text style={styles.highlight}>{props.userNumber}</Text>.
          </Text>
        </View>
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

let imgContainerDimensions = [300, 300],
  borderRadiusImg = 150,
  marginVerticalImgContainer = 30,
  marginVerticalResultText = 15;

if (Dimensions.get("window").height <= 520) {
  imgContainerDimensions = [200, 200];
  borderRadiusImg = 100;
  marginVerticalImgContainer = 10;
  marginVerticalResultText = 7;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: imgContainerDimensions[0],
    height: imgContainerDimensions[1],
    borderRadius: borderRadiusImg,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: marginVerticalImgContainer,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: Dimensions.get("window").width > 360 ? 30 : 10,
  },
  resultText: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: marginVerticalResultText,
  },
  highlight: {
    color: Colors.primary,
  },
});

export default GameOverScreen;
