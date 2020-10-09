import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import Card from "../components/Card";
import InlineBtn from "../components/InlineBtn";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";

import Colors from "../constants/colors";
import GlobalStyle from "../constants/global.style";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isConfirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );

      return;
    }

    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedNumber;

  if (isConfirmed) {
    confirmedNumber = (
      <Card style={styles.chosenContainer}>
        <Text style={{ ...GlobalStyle.bodyText, ...styles.chosenText }}>
          You selected:
        </Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={15}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.screen}>
            <Text style={{ ...GlobalStyle.titleText, ...styles.title }}>
              Start a New Game!
            </Text>
            <Card style={styles.inputGroup}>
              <Text style={GlobalStyle.bodyText}>Select a Number</Text>
              <Input
                style={styles.input}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={2}
                onChangeText={numberInputHandler}
                value={enteredValue}
              />
              <View style={styles.buttonGroup}>
                <InlineBtn
                  title="RESET"
                  color={Colors.secondary}
                  onPress={resetInputHandler}
                />
                <InlineBtn
                  title="CONFIRM"
                  color={Colors.primary}
                  onPress={confirmInputHandler}
                />
              </View>
            </Card>
            {confirmedNumber}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputGroup: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    width: "100%",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  chosenContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  chosenText: {
    textAlign: "center",
  },
});

export default StartGameScreen;
