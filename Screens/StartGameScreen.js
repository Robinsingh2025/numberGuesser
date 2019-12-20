import React from "react";

import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import Card from "../components/Card";
import Colors from "../components/constants/colors";
import Input from "../components/Input";

export default function StartGameScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          maxLength={2}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Confirm" color={Colors.accent} onPress={() => {}} />
          </View>
          <View style={styles.button}>
            <Button title="Reset" color={Colors.primary} onPress={() => {}} />
          </View>
        </View>
      </Card>
    </View>
  );
}

//rnss

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  },
  button: {
    flex: 1,
    justifyContent: "space-between",
    margin: 2
  },
  inputContainer: {
    width: "80%",
    alignItems: "center"
  },
  input: {
    width: 50,
    textAlign: "center"
  }
});
