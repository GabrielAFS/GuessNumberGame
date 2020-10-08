import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import Header from './components/Header';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

import Colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)

  const newGameHandler = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  const gameOverHandler = numberOfRounds => {
    setGuessRounds(numberOfRounds)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen
      userChoice={userNumber}
      onGameOver={gameOverHandler}
    /> 
  }
  else if (guessRounds > 0) {
    content = <GameOverScreen
      roundsNumber={guessRounds}
      userNumber={userNumber}
      onRestart={newGameHandler}
    />
  }

  return (
    <View style={styles.screen}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.primary}
      />
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
