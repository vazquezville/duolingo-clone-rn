import React, { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";
import PropTypes from "prop-types";
import Button from "../Button";
import styles from "./styles";
import mascot from "../../../assets/images/mascot.png";

const OpenEndedQuestion = ({ question, onCorrectAnswer, onWrongAnswer }) => {
  const [answer, setAnswer] = useState(""); //Var to keep the answer

  //On button press, clean and get the answer, check if is correct, and empty the answer state
  const onButtonPress = () => {
    if (question.answer.toLowerCase().trim() === answer.toLowerCase().trim()) {
      onCorrectAnswer();
    } else {
      onWrongAnswer();
    }
    setAnswer("");
  };

  return (
    <>
      {/* Header's title */}
      <Text style={styles.title}>Translate this sentence</Text>

      {/* Question container */}
      <View style={styles.row}>
        {/* Mascot illustration for the question */}
        <Image source={mascot} style={styles.mascot} resizeMode="contain" />

        {/* Question text */}
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
      </View>

      {/* Answer's input */}
      <TextInput
        value={answer}
        onChangeText={setAnswer}
        placeholder="Type in English"
        style={styles.textInput}
        textAlignVertical="top"
        multiline
      ></TextInput>

      {/* Check button */}
      <Button text="Check" onPress={onButtonPress} disabled={false} />
    </>
  );
};

//PropTypes setup
OpenEndedQuestion.propTypes = {
  onCorrectAnswer: PropTypes.func,
  onWrongAnswer: PropTypes.func,
  question: PropTypes.shape({
    answer: PropTypes.string,
    id: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

export default OpenEndedQuestion;
