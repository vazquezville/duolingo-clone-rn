import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import Button from "../Button";
import WordOption from "../WordOption";
import styles from "./styles";

const FillInTheBlank = ({ question, onCorrectAnswer, onWrongAnswer }) => {
  //Could have many options to be filled, this time save them into an array
  const [parts, setParts] = useState(question.parts);

  //Restart the selected options on the first render, creating a new array, overriding the selected option to null and saving this array
  useEffect(() => {
    const newParts = [...parts];

    for (let i = 0; i < newParts.length; i++) {
      if (newParts[i].isBlank && newParts[i].selected) {
        newParts[i].selected = null;
      }
    }

    setParts(newParts);
  }, []);

  //When the check button is pressed, check if the answers is true or false
  const onButtonPress = () => {
    if (checkIfCorrect()) {
      onCorrectAnswer();
    } else {
      onWrongAnswer();
    }
  };

  //In order to now if the answer is correct, filter the array to know if the part is blank, selected
  const checkIfCorrect = () => {
    return (
      parts.filter((part) => part.isBlank && part.selected !== part.text)
        .length === 0
    );
  };

  //Add a new option as selected, creating a new array and saving all the same elements but with the selected one with field selected as true
  const addOptionToSelected = (option) => {
    if (isSelected(option)) {
      return;
    }
    const newParts = [...parts];

    for (let i = 0; i < newParts.length; i++) {
      if (newParts[i].isBlank && !newParts[i].selected) {
        newParts[i].selected = option;
        break;
      }
    }

    setParts(newParts);
  };

  //Remove the selected item, turning its selected property to null by its index
  const removeOptionFromSelected = (index) => {
    const newParts = [...parts];
    newParts[index].selected = null;
    setParts(newParts);
  };

  const isSelected = (option) => {
    return (
      parts.filter((part) => part.isBlank && part.selected === option).length >
      0
    );
  };

  const isReadyToCheck = () => {
    return parts.filter((part) => part.isBlank && !part.selected).length > 0;
  };

  return (
    <>
      {/* Title */}
      <Text style={styles.title}>Complete the sentence</Text>

      {/* Question */}
      <View style={styles.row}>
        {parts.map((part, index) => {
          if (part.isBlank) {
            return (
              <View style={styles.blank} key={index}>
                {part.selected && (
                  <WordOption
                    text={part.selected}
                    onPress={() => {
                      removeOptionFromSelected(index);
                    }}
                  />
                )}
              </View>
            );
          } else {
            return (
              <Text style={styles.text} key={index}>
                {part.text}
              </Text>
            );
          }
        })}
      </View>

      {/* Options, used component WordOption */}
      <View style={styles.optionsContainer}>
        {question.options.map((option, index) => {
          return (
            <WordOption
              text={option}
              key={index}
              isSelected={isSelected(option)}
              onPress={() => {
                addOptionToSelected(option);
              }}
            />
          );
        })}
      </View>

      {/* Button */}
      <Button
        text="Check"
        onPress={onButtonPress}
        disabled={isReadyToCheck()}
      ></Button>
    </>
  );
};

//PropTypes setup
FillInTheBlank.propTypes = {
  onCorrectAnswer: PropTypes.func,
  onWrongAnswer: PropTypes.func,
  question: PropTypes.shape({
    options: PropTypes.oneOfType([PropTypes.any.isRequired]).isRequired,
    parts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        isBlank: PropTypes.bool,
      })
    ).isRequired,
  }),
};

export default FillInTheBlank;
