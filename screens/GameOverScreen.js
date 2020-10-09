import React from "react";

import { View, Text, StyleSheet, Button, Image } from "react-native";

import MainButton from '../components/MainButton';

import Colors from '../constants/colors';
import GlobalStyle from "../constants/global.style"

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={GlobalStyle.titleText}>
        The Game is over!
      </Text>
      <View style={styles.imageContainer}>
        <Image
          // source={require('../assets/success.png')}
          source={{uri: 'https://i.kym-cdn.com/photos/images/newsfeed/000/865/302/3d5.gif'}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <Text style={{...GlobalStyle.bodyText, ...styles.resultText}}>
          Your phone needed <Text style={styles.highlight}>
              {props.roundsNumber}
            </Text> rounds to guess the number <Text style={styles.highlight}>
            {props.userNumber}
          </Text>.
        </Text>
      </View>
      <MainButton onPress={props.onRestart}>
        NEW GAME
      </MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    marginHorizontal: 30
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 15
  },
  highlight: {
    color: Colors.primary
  }
});

export default GameOverScreen;
