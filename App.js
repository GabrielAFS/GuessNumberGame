import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

import Colors from './constants/colors';

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.primary}
      />
      <Header title="Guess a Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
