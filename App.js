import React, { useState, useEffect } from "react";
import { View, Alert, ActivityIndicator } from "react-native";

import questions from "./assets/data/questions";

import Header from "./src/components/Header";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion";
import FillInTheBlank from "./src/components/FillInTheBlank";

import styles from "./App.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [loaded, setLoaded] = useState(false); //Const flag to check the loaded
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); //Current question index
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  ); //Question array and content

  //Number of tries, 5 by default
  const [lifes, setLifes] = useState(5);

  //Trigger loadData function in the startup to recover the user's data state
  useEffect(() => {
    loadData();
  }, []);

  //Move the index of the questions' array after a correct answer
  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You beat the level!");
      setCurrentQuestionIndex(0);

      return;
    }

    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  //After every change in lifes, questions' index or the loaded state, save the current data
  useEffect(() => {
    if (loaded) {
      saveData();
    }
  }, [lifes, currentQuestionIndex, loaded]);

  //Manage the refresh of the game, setup lifes to 5 again and move the questions' index to 0
  const restartGame = () => {
    setLifes(5);
    setCurrentQuestionIndex(0);
  };

  //When the question is answered correctly, move the questions' index in order to show the next question
  const onCorrectAnswer = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  //Manage a fail, take a life out if still having, if not trigger a game over
  const onWrongAnswer = () => {
    if (lifes <= 1) {
      Alert.alert("Game over", "Try again", [
        {
          text: "You failed the level. Try again",
          onPress: restartGame,
        },
      ]);
    } else {
      Alert.alert("Wrong");
      setLifes(lifes - 1);
    }
  };

  //Record the current user's data state in async storage
  const saveData = async () => {
    await AsyncStorage.setItem("lifes", lifes.toString());
    await AsyncStorage.setItem(
      "currentQuestionIndex",
      currentQuestionIndex.toString()
    );
  };

  //Function to manage the load of user's data if exist any previous record
  const loadData = async () => {
    const loadedlifes = await AsyncStorage.getItem("lifes");
    if (loadedlifes) {
      setLifes(parseInt(loadedlifes));
    }

    const currentQuestionIndex = await AsyncStorage.getItem(
      "currentQuestionIndex"
    );
    if (currentQuestionIndex) {
      setCurrentQuestionIndex(parseInt(currentQuestionIndex));
    }

    setLoaded(true);
  };

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.root}>
      {/* Header, showing progress and lifes */}
      <Header
        progress={currentQuestionIndex / questions.length}
        lifes={lifes}
      />

      {/* Depending on the question type, call the correct component */}
      {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
        <ImageMultipleChoiceQuestion
          question={currentQuestion}
          onCorrectAnswer={onCorrectAnswer}
          onWrongAnswer={onWrongAnswer}
        />
      )}
      {currentQuestion.type === "OPEN_ENDED" && (
        <OpenEndedQuestion
          question={currentQuestion}
          onCorrectAnswer={onCorrectAnswer}
          onWrongAnswer={onWrongAnswer}
        />
      )}
      {currentQuestion.type === "FILL_IN_THE_BLANK" && (
        <FillInTheBlank
          question={currentQuestion}
          onCorrectAnswer={onCorrectAnswer}
          onWrongAnswer={onWrongAnswer}
        />
      )}
    </View>
  );
};

export default App;
