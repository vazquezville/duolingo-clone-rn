import React, { useState } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import ImageOption from "../ImageOption/";
import Button from "../Button";
import styles from "./styles";

const ImageMultipleChoiceQuestion = ({
  question,
  onCorrectAnswer,
  onWrongAnswer,
}) => {
  const [selected, setSelected] = useState(null); //When a option is pressed

  //On button press, if answer is correct call onCorrectAnswer parent function, if not call onWrongAnswer from parent
  const onButtonPress = () => {
    if (selected.correct) {
      setSelected(null);
      onCorrectAnswer();
    } else {
      onWrongAnswer();
    }
  };
  return (
    <>
      {/* Question's Title */}
      <Text style={styles.title}>{question.question}</Text>

      {/* Map through all the question's options */}
      <View style={styles.optionsContainer}>
        {question.options.map((option) => {
          return (
            <ImageOption
              key={option.id}
              image={option.image}
              text={option.text}
              isSelected={selected?.id === option.id}
              onPress={() => setSelected(option)}
            />
          );
        })}
      </View>

      {/* Check button */}
      <Button text="Check" onPress={onButtonPress} disabled={!selected} />
    </>
  );
};

//PropTypes setup
ImageMultipleChoiceQuestion.propTypes = {
  onCorrectAnswer: PropTypes.func,
  onWrongAnswer: PropTypes.func,
  question: PropTypes.shape({
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        image: PropTypes.string,
        correct: PropTypes.bool,
      })
    ).isRequired,
    question: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageMultipleChoiceQuestion;
